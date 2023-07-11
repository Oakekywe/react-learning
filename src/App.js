import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "./stores/actionCreaters";
import ACompo from "./components/ACompo";
import BCompo from "./components/BCompo";

function App() {
  const account = useSelector((state) => state.account);
  const users = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { add, remove, insert, drop } = bindActionCreators(
    actionCreaters,
    dispatch
  );

  const phoneRef = useRef();
  const nameRef = useRef();

  const addUser = (e) => {
    e.preventDefault();
    let user = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
    };
    insert(user);
    nameRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <div>
      <h1>{account}</h1>

      {/* show user */}
      {users.map((user) => (
        <p style={{ position: "relative" }}>
          {user.name} : {user.phone}
          <span
            style={{
              color: "red",
              cursor: "pointer",
              position: "absolute",
              top: "-14px",
              right: "1090px",
            }}
            onClick={() => drop(user)}
          >
            x
          </span>
        </p>
      ))}

      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>Remove</button>
      <hr />

      <form onSubmit={addUser}>
        <input type="tel" placeholder="phone" ref={phoneRef} /> <br />
        <input type="text" placeholder="name" ref={nameRef} />
        <br />
        <button type="submit">click</button>
      </form>
      <hr />
      <ACompo />
      <hr />
      <BCompo />
    </div>
  );
}

export default App;
