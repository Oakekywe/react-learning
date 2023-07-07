import React, { Component } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

class EditPost extends Component {
  constructor(props) {
    super(props);
    const post = props.state.state.post;
    this.state = {
      id: post.id,
      title: post.title,
      desc: post.desc,
    };
  }
  updatePost(e) {
    e.preventDefault();
    this.props.updatePost(this.state);
    this.props.navigate("/");
  }
  render() {
    return (
      <div className="card bg-dark py-4 px-5">
        <Link to="/">
          <button className="btn btn-sm btn-primary">
            <i className="fa fa-arrow-left"></i>
          </button>
        </Link>
        <form onSubmit={this.updatePost.bind(this)}>
          <h2 className="text-white py-2 text-center">Edit Post</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-white">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label text-white">
              Post Description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              onChange={(e) => this.setState({ desc: e.target.value })}
              value={this.state.desc}
            />
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary float-end mb-3"
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default (props) => {
  let navigate = useNavigate();
  let state = useLocation();
  return <EditPost {...props} navigate={navigate} state={state} />;
};
