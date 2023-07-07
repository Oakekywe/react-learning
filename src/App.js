import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

function App() {
  const END_POINT = "http://localhost:4000";
  let [posts, setPosts] = useState([]);

  const addNewPost = async (post) => {
    await fetch(END_POINT + "/posts", {
      method: "POST",
      body: JSON.stringify({
        desc: post.desc,
        title: post.title,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    setPosts([post, ...posts]);
  };

  const deletePostHandler = async (id) => {
    await fetch(END_POINT + "/posts/" + id, {
      method: "DELETE",
    });
    setPosts(posts.filter((post) => post.id != id));
  };

  const updatePostHandler = async (updatePost) => {
    await fetch(END_POINT + "/posts/" + updatePost.id,
      {
        method: "PATCH",
        body: JSON.stringify(updatePost),
        headers: {
          "content-type": "application/json",
        },
      });
    setPosts(posts.map((post)=> post.id === updatePost.id ? updatePost : post));

  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let posts = await (await fetch(END_POINT + "/posts")).json();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-info my-3">Posts</h1>

      <Router>
        <Routes>
          <Route
            path="/"
            element={<Post posts={posts} deletePost={deletePostHandler} />}
          />
          <Route path="/add" element={<AddPost addNewPost={addNewPost} />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route
            path="/post/edit/:id"
            element={<EditPost updatePost={updatePostHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
