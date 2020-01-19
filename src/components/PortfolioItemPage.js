import React from 'react';

const HomePage = (props) => (
  <div>
    <h1>A Portfolio Item</h1>
    <p>This is Portfolio item: {props.match.params.id}</p>
  </div>
);

export default HomePage;