import React from "react";
import { useLoaderData } from "react-router";
import Comment from "./Comment";

const Comments = () => {
  const comments = useLoaderData();
  console.log(comments);
  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      <div>
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
