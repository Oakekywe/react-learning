import React, { Component } from "react";
import PostCard from "./PostCard";

class Post extends Component {
  deletePost(id) {
    this.props.deletePost(id);
  }
  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            deletePost={this.deletePost.bind(this)}
          />
        ))}
      </div>
    );
  }
}

export default Post;
