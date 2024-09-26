//Matthew Kool 301184313
//Imports
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';

//What actually does something
const App = () => {

  return (
    <Router basename="/Portfolio/">

      <MainRouter />

    </Router>
  );
};

export default App;
