import React, { useState } from "react";

function AddUser(props) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cell, setCell] = useState("");
  const [uuid, setUuid] = useState("");

  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const cellChangeHandler = (e) => {
    setCell(e.target.value);
  };
  const uuidChangeHandler = (e) => {
    setUuid(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let user = {
        name : name,
        image : image,
        phone : phone,
        cell : cell,
        uuid : uuid,
    }
    props.addUser(user);
  };

  return (
    <div className="card bg-dark px-4 py-2 my-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label text-white">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            onChange={imageChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={nameChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label text-white">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label text-white">
            Tel
          </label>
          <input
            type="tel"
            className="form-control"
            id="tel"
            onChange={cellChangeHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="uuid" className="form-label text-white">
            Uuid
          </label>
          <input
            type="uuid"
            className="form-control"
            id="uuid"
            onChange={uuidChangeHandler}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary btn-sm float-end">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddUser;
