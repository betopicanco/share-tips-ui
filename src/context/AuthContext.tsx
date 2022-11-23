import IUserLogged from "interfaces/user/IUserLogged";
import { createContext, useEffect, useState } from "react";
import api, { BadRequestExcetions } from "services/api";
import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import router from 'next/router'
import { AxiosError } from "axios";

interface AuthContextProps {
  userLogged?: IUserLogged | null;
  login?: (email: string, password: string) => Promise<void | string>;
  logout?: () => Promise<void>;
}

interface AuthProviderProps {
  children: JSX.Element;
}

const cookies = new Cookies();

function manageCookie(isLogged: boolean) {
  if (isLogged) {
    cookies.set("is-logged", isLogged);
  } else {
    cookies.delete("is-logged");
  }
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider({ children }: AuthProviderProps) {
  const [userLogged, setUserLogged] = useState<IUserLogged | null>();

  async function configSession(user: IUserLogged | null) {
    if (user?.email) {
      setUserLogged(user);
      manageCookie(true);
    } else {
      setUserLogged(null);
      manageCookie(false);
    }
  }

  async function login(email: string, password: string): Promise<void | string> {
    await api
      .get(`users/login?email=${email}&password=${password}`)
      .then(async (res) => {
        await configSession(res?.data);
        router.push("/");
      })
      .catch((e: AxiosError) => {
        const data: any = e.response?.data;
        const error: BadRequestExcetions = data;
        const errorDetails = error.details;
        
        return errorDetails;
      });

    
  }

  async function logout() {
    await configSession(null);
  }

  return (
    <AuthContext.Provider value={{ userLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
