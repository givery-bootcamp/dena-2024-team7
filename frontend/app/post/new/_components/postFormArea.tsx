"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { postClient } from "@/lib/connect";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DropArea } from "../../[id]/edit/_components/fileDropArea";
import useFileDrop from "../../[id]/edit/_hooks/useFileDrop";

interface Props {
  params: {
    token: string;
  };
}

const PostFormArea = ({ params }: Props) => {
  const { files, getRootProps, getInputProps, setFiles } = useFileDrop();
  const router = useRouter();

  const imageUrls: string[] = [];
  files.map((file) => {
    imageUrls.push(file.preview);
  });
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
      const result = await postClient.createPost(
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
      console.log("createPOst!!!!!!!");
      // revalidatePath("/post");
      router.push("/post");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <DropArea imageUrls={imageUrls} getRootProps={getRootProps} getInputProps={getInputProps} setFiles={setFiles} />
      <div>アップロードされたファイル数: {files.length}</div>
      <div>アップロードされたファイル: {files.map((file) => file.name).join(", ")}</div>
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
          const imageUrl = process.env.NEXT_PUBLIC_S3_BUCKET_PATH + files[0].name;
          console.log("imageUrl", imageUrl);
          await postNewPost(postTitle, postBody, imageUrl, params.token);
        }}
      >
        作成する
      </Button>
    </div>
  );
};
export default PostFormArea;
