import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class AddPost extends Component {
  state = {
    title: "",
    desc: "",
  };

  addUser = (e) => {
    e.preventDefault();
    this.props.addNewPost({id: uuid(), ...this.state});
  };

  render() {
    return (
      <div className="card bg-dark py-4 px-5">
        <form onSubmit={this.addUser}>
          <h2 className="text-white py-2 text-center">Add Post</h2>
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
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddPost;
