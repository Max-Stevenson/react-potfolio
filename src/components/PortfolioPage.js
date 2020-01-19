import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => (
  <div>
    <h1>My Work</h1>
    <p>Checkout some of my projects:</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
  </div>
);

export default HomePage;