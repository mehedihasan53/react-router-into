import React from "react";
import { Link, useLoaderData } from "react-router";

const Post = ({ post }) => {
  console.log(post);
  const { title, id } = post;

  return (
    <div className="border-2 p-4 rounded-lg shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-2">Post Title:{title}</h2>
      <Link to={`/posts/${id}`}>
        <button className="btn btn-primary mt-4">Show Post Details</button>
      </Link>
    </div>
  );
};

export default Post;
