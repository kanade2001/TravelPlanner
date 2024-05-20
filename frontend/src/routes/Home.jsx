import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      Home
    </div>
  );
}

export default Home;