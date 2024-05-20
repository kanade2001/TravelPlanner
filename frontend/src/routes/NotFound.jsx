import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      NotFound
    </div>
  );
}

export default NotFound;