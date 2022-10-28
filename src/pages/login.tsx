import type { NextPage } from "next";
import LoginForm from "components/template/LoginForm";

const Login: NextPage = () => {
  return (
    <main className="flex h-screen">
      <div className="w-full my-auto flex justify-center align-middle">
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
