import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";

export const useAuthCheck = (prop) => {
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [user, setUser] = useState(null);
  const reduxUserLogedIn = useSelector((state) => state.userLogedIn);
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    //fixing bug when user change on same state
    if (reduxUserLogedIn != userLogedIn) {
      setUserLogedIn(reduxUserLogedIn);

      const user = cookies.get("user");

      setUser(user);
    }
  }, [reduxUserLogedIn]);

  useEffect(() => {
    const user = cookies.get("user");

    if (user) {
      setUserLogedIn(true);
      setUser(user);
      return;
    }

    setUserLogedIn(false);
  }, []);

  useEffect(() => {
    if (!user) {
      const user = cookies.get("user");

      if (user) {
        setUserLogedIn(true);
        setUser(user);
        return;
      }
    }
  }, [router]);

  return [userLogedIn, setUserLogedIn, user];
};
