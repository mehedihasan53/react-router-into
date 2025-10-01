import React from "react";
import { useLoaderData } from "react-router";

const CommentDetails = () => {
  const comment = useLoaderData();

  return (
    <div className="container mx-auto border-2 border-black p-5 rounded-lg">
      <h2 className="text-2xl font-bold text-center mt-5">Comment Details</h2>
      <h4 className="text-xl ">Name:{comment.name}</h4>
      <h4 className="text-xl ">Email:{comment.email}</h4>
      <p className="text-xl ">body: {comment.body}</p>
    </div>
  );
};

export default CommentDetails;
