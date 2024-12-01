import React from "react";

const PageLayout = ({ children }) => {
  return (
    <section className="max-w-4xl mx-auto p-2 min-h-screen h-screen">{children}</section>
  );
};

export default PageLayout;
