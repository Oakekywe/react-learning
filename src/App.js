import { useSelector, useDispatch } from "react-redux";
import {login, logout} from './stores/actions'

function App() {
  const logged = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{logged ? "Member" : "Guest"}</h1>
      <button onClick={() => dispatch(login(true))}>Login</button>
      <button onClick={() => dispatch(logout(false))}>Logout</button>
    </div>
  );
}

export default App;
