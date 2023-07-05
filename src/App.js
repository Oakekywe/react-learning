import React, { useState, useEffect } from "react";
import User from "./components/users/User";
import AddUser from "./components/users/AddUser";

function App() {
  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        let rawUsers = users.results;
        let filteredUsers = rawUsers.map((usrs) => {
          return {
            uuid: usrs.login.uuid,
            name: `${usrs.name.title} ${usrs.name.first} ${usrs.name.last}`,
            phone: usrs.phone,
            cell: usrs.cell,
            image: usrs.picture.thumbnail,
          };
        });
        setUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeUserHandler = (uuid) => {
    let remainUsers = users.filter((usr) => usr.uuid != uuid);
    setUsers(remainUsers);
  };

  const addUserHandler = (user) => {
    let newUser = [user, ...users];
    setUsers(newUser);
    setShowForm(!showForm);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container my-5">
      <div>
        <h1 className="text-center my-5">Our Employees</h1>
        <button
          className="btn btn-sm btn-primary my-2"
          onClick={showFormHandler}
        >
          Add
        </button>
        {showForm && <AddUser addUser={addUserHandler} />}
        {users.map((usr) => (
          <User key={usr.uuid} user={usr} remove={removeUserHandler} />
        ))}
      </div>
    </div>
  );
}

export default App;
