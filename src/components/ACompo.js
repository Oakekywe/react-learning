import { useSelector } from "react-redux";

export default function ACompo() {
  const account = useSelector((state) => state.account);
  return (
    <div>
      <h3>ACompo</h3>
      <p>Result: {account}</p>
    </div>
  );
}
