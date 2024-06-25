import { NextPage } from "next";
import { SignIn } from "./_components/signInButton";
import { SignOut } from "./_components/signOutButton";

const LoginPage: NextPage = async () => {
  return (
    <main className="mx-auto min-h-screen max-w-xl  pt-4">
      <div className=" mx-auto max-w-xl justify-center  text-center">
        <h1 className="mb-2 text-2xl font-bold">ログイン</h1>
        <SignIn />
        <SignOut />
      </div>
    </main>
  );
};

export default LoginPage;