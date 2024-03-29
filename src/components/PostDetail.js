import React, { Component } from "react";
import UserImage from "../images/user.png";
import { Link, useLocation } from "react-router-dom";

class PostDetail extends Component {
  render() {
    const post = this.props.state.state.post;
    return (
      <div>
        <Link to="/">
          <button className="btn btn-sm btn-primary">
            <i className="fa fa-arrow-left"></i>
          </button>
        </Link>
        <div className="card p-5">
          <img
            src={UserImage}
            width="200px"
            height="400px"
            className="card-img-top"
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => {
  const state = useLocation();
  return <PostDetail {...props} state={state} />;
};
