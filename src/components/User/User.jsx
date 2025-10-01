import React from "react";
import { useLoaderData } from "react-router";
import User1 from "./User1";

const User = () => {
  const user = useLoaderData();
  console.log(user);
  return (
    <div>
      <h3 className="text-center font-bold text-amber-600">I am User page </h3>
      <div>
        {user.map((u) => (
          <User1 key={u.id} u={u}></User1>
        ))}
      </div>
    </div>
  );
};

export default User;
