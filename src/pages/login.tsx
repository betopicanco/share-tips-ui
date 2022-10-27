import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/template/Button";
import Input from "../components/Input";
import LoginForm from "../components/LoginForm";

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
