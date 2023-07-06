import React, { Component } from "react";
import userPhoto from "../images/user.png";

class PostCard extends Component {
  deletePost() {
    this.props.deletePost(this.props.post.id);
  }
  render() {
    return (
      <div className="card px-2 mb-2">
        <div className="row">
          <div className="col-2">
            <img src={userPhoto} width="80px" height="80px" />
          </div>
          <div className="col-5 mt-2">
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.desc}</p>
          </div>
          <div className="col-5">
            <button className="btn btn-info btn-sm mt-3 me-2">
              <i className="fa fa-eye"> </i>
            </button>
            <button className="btn btn-warning btn-sm mt-3 me-2">
              <i className="fa fa-edit"> </i>
            </button>
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
