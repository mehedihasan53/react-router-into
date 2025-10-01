import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-5">PostDetails</h2>
      <h3 className="text-center text-xl font-bold mt-5">
        Post Title: {post.title}
      </h3>
      <p className="text-center text-xl  mt-5">Post Description: {post.body}</p>
    </div>
  );
};

export default PostDetails;
