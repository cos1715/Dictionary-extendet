import React from 'react';
import { Link } from 'react-router-dom';

import "./NotFound.css";

const NotFound = () => (
  <div className="not-found-div">
    <h1>Not found :(</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
    <div className="not-found-sign">404</div>
    <div>
      <Link to="/dictionary" className="not-found-link">Return to home page</Link>
    </div>
  </div>
);

export default NotFound;