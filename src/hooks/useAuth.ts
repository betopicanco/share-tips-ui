import { useEffect, useState } from "react";
import IAuthor from "interfaces/user/IAuthor";
import api, { BadRequestExcetions } from "services/api";
import router from "next/router";
import { AxiosError } from "axios";

interface UserAuth extends IAuthor {
  isLogged: boolean;
}

const setUserSession = async (data: any): Promise<void> => {
  const userObj = {
    id: data?.id,
    name: data?.name,
    email: data?.email,
    isLogged: data?.isLogged,
  };

  const userJson = JSON.stringify(userObj);
  sessionStorage.setItem("user", userJson);
};

const getUserSession = async (): Promise<UserAuth> => {
  const userSession = sessionStorage.getItem("user");
  const userJson = userSession && JSON.parse(userSession);

  return {
    id: userJson?.id,
    name: userJson?.name,
    email: userJson?.email,
    isLogged: userJson?.isLogged,
  };
};

const useAuth = () => {
  const [user, setUser] = useState<UserAuth>();

  const login = async (email: string, password: string) => {
    await api
      .get(`users/login?email=${email}&password=${password}`)
      .then(async (res) => {
        await setUserSession({isLogged: true, ...res?.data});
        router.push("/");
      })
      .catch((e: AxiosError) => {
        const data: any = e.response?.data;
        const error: BadRequestExcetions = data;
        const errorDetails = error.details;

        throw new Error(errorDetails);
      });
  };

  useEffect(() => {
    getUserSession().then((userObj) => {
      setUser(userObj);
    });
  }, [setUser]);

  const getUser = async () => {
    return await getUserSession();
  }

  return { getUser, login };
};

export default useAuth;
