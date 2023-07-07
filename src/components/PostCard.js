import React, { Component } from "react";
import userPhoto from "../images/user.png";
import { Link } from "react-router-dom";

class PostCard extends Component {
  deletePost() {
    this.props.deletePost(this.props.post.id);
  }
  render() {
    let post = this.props.post;
    return (
      <div className="card px-2 mb-2">
        <div className="row">
          <div className="col-2">
            <img src={userPhoto} width="80px" height="80px" />
          </div>
          <div className="col-5 mt-2">
            <h4>{post.title}</h4>
            <p>{post.desc}</p>
          </div>
          <div className="col-5">
            <Link to={`/post/${post.id}`} state={{ post: post }}>
              <button className="btn btn-info btn-sm mt-3 me-2">
                <i className="fa fa-eye"> </i>
              </button>
            </Link>
            <Link to={`/post/edit/${post.id}`} state={{ post: post }}>
              <button className="btn btn-warning btn-sm mt-3 me-2">
                <i className="fa fa-edit"> </i>
              </button>
            </Link>
            <button
              className="btn btn-danger btn-sm mt-3"
              onClick={this.deletePost.bind(this)}
            >
              <i className="fa fa-trash"> </i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
