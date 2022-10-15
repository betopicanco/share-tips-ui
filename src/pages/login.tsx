import type { NextPage } from "next";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input"
import api from "../services/api";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await api.request({
      method: 'GET',
      url: 'users/login',
      data: {
        email,
        password
      }
    }).then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="bg-white m-4 p-5 rounded-lg md:w-1/4 grid justify-center">
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          id="email"
          onChange={(value: string) => setEmail(value)}
        />

        <Input
          label="Senha"
          type="password"
          id="pass"
          onChange={(value: string) => setPassword(value)}
        />
      </form>

      <div className="text-center" onClick={() => handleSubmit()}>
        <Button type={'submit'}>
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default Login;
