"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PostData } from "@/gen/post_pb";
import { postClient } from "@/lib/connect";
import { useState } from "react";
import useFileDrop from "../_hooks/useFileDrop";
import { DropArea } from "./fileDropArea";

interface Props {
  params: {
    post: PostData;
    token: string;
  };
}

const UpdatePostFormArea = ({ params }: Props) => {
  const { files, getRootProps, getInputProps, setFiles } = useFileDrop();
  var post = params.post;

  const imageUrls: string[] = [];
  imageUrls.push(post.imageUrl);
  files.map((file) => {
    imageUrls.push(file.preview);
  });
  const [postTitle, setPostTitle] = useState(post.title);
  const handleChangeTitle = (value: string) => {
    setPostTitle(value);
  };
  const [postBody, setPostBody] = useState(post.body);
  const handleChangeBody = (value: string) => {
    setPostBody(value);
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
          var formData = new FormData();
          formData.append("file", files[0], files[0].name);
          formData.append("filename", files[0].name);
          const imageUrl = process.env.NEXT_PUBLIC_S3_BUCKET_PATH + files[0].name;
          await updatePost(post.id, postTitle, postBody, imageUrl, params.token);

          await uploadFile(null, formData);
        }}
      >
        更新
      </Button>
    </div>
  );
};
export default UpdatePostFormArea;

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
const updatePost = async (id: string, title: string, body: string, imageUrl: string, token: string) => {
  try {
    const result = await postClient.updatePost(
      {
        id: id,
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
    console.log("result", result);
  } catch (error) {
    console.error(error);
  }

  console.log({ title, body });
};
