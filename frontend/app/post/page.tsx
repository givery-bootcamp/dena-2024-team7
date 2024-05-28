import { NextPage } from "next";
import { mockData } from "@/constants/mock";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { postClient } from "@/lib/connect";

const PostListPage: NextPage = async () => {
  const res = await postClient.post({});
  console.log(res.post);

  return (
    <main className="min-h-screen">
      <h1>Post List Page</h1>
      <section className="p-2">
        {mockData.map((md) => {
          return (
            <div className="p-1" key={md.id}>
              <Link href={`/post/${md.id}`}>
                <Card className="flex justify-between p-2">
                  <div>
                    {md.title}
                    {md.body}
                  </div>
                  <div>{md.createdAt.toUTCString()}</div>
                </Card>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default PostListPage;
