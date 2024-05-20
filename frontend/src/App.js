import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Plan from './routes/Plan.jsx'
import NotFound from './routes/NotFound.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
