import React, { use } from "react";

const User2 = ({ user2Promise }) => {
  const user2Use = use(user2Promise);
  console.log(user2Use);
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-red-600">
        I am user 2 page
      </h2>
    </div>
  );
};

export default User2;
