import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../stores/actionCreaters";

export default function BCompo() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { add, remove } = bindActionCreators(actionCreaters, dispatch);
  return (
    <div>
      <h3>BCompo</h3>
      <p>result: {account}</p>
      <button onClick={()=> add(50)}>+</button>
      <button onClick={()=> remove(50)}>-</button>
    </div>
  );
}
