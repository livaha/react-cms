import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (<div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/hook">React Hook Demo</Link>
          </li>
        </ul>
  </div>
  );
}

export default Nav;
