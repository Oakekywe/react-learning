import React, { Component } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

class Post extends Component {
  deletePost(id) {
    this.props.deletePost(id);
  }
  render() {
    return (
      <div>
        <Link to="/add">
          <button className="btn btn-sm btn-primary float-end">
            Add<i className="fa fa-add"></i>
          </button>
          <br /> <br />
        </Link>
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
