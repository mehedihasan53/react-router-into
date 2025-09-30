import React from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h3 className="text-center font-bold text-amber-600">I am User page </h3>
    </div>
  );
};

export default User;
