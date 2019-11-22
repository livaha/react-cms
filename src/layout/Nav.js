import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (<div>
        <ul>
          <li>
            <Link to="/">React Hook Movie</Link>
          </li>
          <li>
            <Link to="/router">Router</Link>
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
