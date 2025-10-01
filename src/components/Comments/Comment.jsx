import React from "react";
import { Link } from "react-router";

const Comment = ({ comment }) => {
  const { name, id } = comment;

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="text-center text-2xl font-bold">Comment</h3>
      <h4 className="text-center text-xl font-semibold">Name: {name}</h4>
      <Link to={`/comments/${id}`}>
        <button className="btn btn-primary container mx-auto mt-4">
          Show Comment Details
        </button>
      </Link>
    </div>
  );
};

export default Comment;
