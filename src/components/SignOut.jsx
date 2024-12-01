import React from "react";
import axiosHelper from "../axios/axiosHelper";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const SignOut = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSignOut = async () => {
    try {
      await axiosHelper.get("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button
      className="mt-2 bg-indigo-500 text-white rounded py-1 max-w-48 w-full block ms-auto"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
