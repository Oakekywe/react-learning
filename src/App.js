import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post title 1",
      desc: "post desc 1",
    },
    {
      id: 2,
      title: "Post title 2",
      desc: "post desc 2",
    },
  ]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };
  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>
      <Post posts={posts} />
      <AddPost addNewPost={addNewPost} />
    </div>
  );
}

export default App;
