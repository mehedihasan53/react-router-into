import React from "react";
import { useLoaderData } from "react-router";
import Post from "../post/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2>There are {posts.length} posts</h2>
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
