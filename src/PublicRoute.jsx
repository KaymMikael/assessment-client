import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const [user, setUser] = useState(false);

  return user ? <Navigate to={"/"} /> : children;
};

export default PublicRoute;
