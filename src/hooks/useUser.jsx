import { useEffect, useState } from "react";
import axiosHelper from "../axios/axiosHelper";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyUser() {
      try {
        const result = await axiosHelper.get("/auth");
        console.log(result.data);
        setUser(result.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    verifyUser();
  }, []);

  return { user, loading, setUser };
};
