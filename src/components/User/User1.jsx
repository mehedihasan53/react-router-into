import React from "react";

const User1 = ({ u }) => {
  const { name, address, email } = u;
  return (
    <div className="border border-red-700 p-4 m-4">
      <h1>{name}</h1>
      <h2>{address.street}</h2>
      <p>{email}</p>
    </div>
  );
};

export default User1;
