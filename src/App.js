import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./stores/actionCreators";

function App() {
  const logged = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const { login, logout } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h1>{logged ? "Member" : "Guest"}</h1>
      <button onClick={() => login(true)}>Login</button>
      <button onClick={() => logout(false)}>Logout</button>
    </div>
  );
}

export default App;
