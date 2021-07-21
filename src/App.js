import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routing/routes';

function App() {

  return (
      <Router>
          <Routes />
      </Router>
  );
}

export default App;