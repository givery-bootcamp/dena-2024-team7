"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postClient } from "@/lib/connect";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { DropArea } from "../../[id]/edit/_components/fileDropArea";
import useFileDrop from "../../[id]/edit/_hooks/useFileDrop";

interface Props {
  params: {
    token: string;
  };
}

const PostFormArea = ({ params }: Props) => {
  const { file, getRootProps, getInputProps, setFile } = useFileDrop();
  const router = useRouter();

  const [postTitle, setPostTitle] = useState("");
  const handleChangeTitle = (value: string) => {
    setPostTitle(value);
  };
  const [postBody, setPostBody] = useState("");
  const handleChangeBody = (value: string) => {
    setPostBody(value);
  };
  const postNewPost = async (title: string, body: string, imageUrl: string, token: string) => {
    try {
      await postClient.createPost(
        {
          title: title,
          body: body,
          imageUrl: imageUrl,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      toast.success("Post created successfully!");
      setTimeout(() => {
        router.push("/post");
        router.refresh();
      }, 1000);
    } catch (error) {
      toast.error("Failed to create post. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <DropArea file={file} getRootProps={getRootProps} getInputProps={getInputProps} setFile={setFile} />
      <div>アップロードされたファイル: {file?.name}</div>
      <Input
        type="title"
        placeholder="タイトル"
        value={postTitle}
        onChange={(e) => handleChangeTitle(e.target.value)}
        className="mb-4"
      />
      <Input
        type="body"
        placeholder="テキスト"
        value={postBody}
        onChange={(e) => handleChangeBody(e.target.value)}
        className="mb-4"
      />
      <Button
        className="w-full"
        onClick={async () => {
          const imageUrl = file ? process.env.NEXT_PUBLIC_S3_BUCKET_PATH + file.name : "";
          console.log("imageUrl", imageUrl);

          if (file) {
            const formData = new FormData();

            formData.append("file", file, file.name);
            formData.append("filename", file.name);
            await uploadFile(imageUrl, formData);
          }

          await postNewPost(postTitle, postBody, imageUrl, params.token);
        }}
      >
        作成する
      </Button>
    </div>
  );
};
export default PostFormArea;

const uploadFile = async (prevState: string | null, formData: FormData) => {
  console.log({ formData });
  console.log("uploadFile.....");
  if (!formData.get("file")) {
    return prevState;
  }
  try {
    const response = await fetch("/api/thumbnail/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);

    return data.imageUrl;
  } catch (error) {
    console.error(error);
  }
};
