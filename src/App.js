import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./redux/loginReducer";

function App() {
  const loggedIn = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{loggedIn.value ? "Member" : "Guest"}</h1>
      <button onClick={() => dispatch(login(true))}>login</button>
      <button onClick={() => dispatch(logout(false))}>logout</button>
    </div>
  );
}

export default App;
