import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosHelper from "./axios/axiosHelper";
import { useUser } from "./hooks/useUser";

const PublicRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return user ? <Navigate to={"/"} /> : children;
};

export default PublicRoute;
