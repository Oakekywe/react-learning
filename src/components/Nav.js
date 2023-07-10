import React from "react";
import logoImage from "../images/logo.png";

export default function Nav() {
  return (
    <div>
      <div>
        <img src={logoImage} width="40px" height="40px" />
        <strong>brighter myanmar</strong>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
