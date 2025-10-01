import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">I am header !!!</h1>
      <nav className=" space-x-4 block text-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/user2">User2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
