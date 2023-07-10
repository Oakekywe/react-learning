import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLoginContext } from "../store/LoginContentApi";

export const RouteGuard = ({ children }) => {
  const { loggedIn } = useLoginContext();
  if (loggedIn) return children;
  else return <Navigate to={"/"} replace />;
};
