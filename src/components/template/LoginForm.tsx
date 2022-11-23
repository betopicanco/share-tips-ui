import useAuth from "hooks/useAuth";
import { useContext, useState } from "react";
import AuthContext from "context/AuthContext";

import Button from "./Button";
import Input from "./Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorDetails, setErrorDetails] = useState("");
  const {login} = useContext(AuthContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (login) {
      const error = await login(email, password);

      if(error) setErrorDetails(error);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={`bg-white m-4 'p-5 rounded-lg md:w-1/4 grid justify-center`}
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

      <p className={`text-red-500`}>{errorDetails}</p>

      <div className="text-center" >
        <Button type={"submit"}>Entrar</Button>
      </div>
    </form>
  );
}
