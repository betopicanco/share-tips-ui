import { useState } from "react";

import api from "services/api";

import Button from "./Button";
import Input from "./Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await api
      .request({
        method: "GET",
        url: "users/login",
        data: {
          email,
          password,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white m-4 p-5 rounded-lg md:w-1/4 grid justify-center`}
    >
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
      <div className="text-center" onClick={() => handleSubmit()}>
        <Button type={"submit"}>Entrar</Button>
      </div>
    </form>
  );
}
