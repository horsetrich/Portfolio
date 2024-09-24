import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from '../MainRouter';
import {Link} from 'react-router-dom';


const App = () => {

  return (
    <Router basename="/Portfolio/">

      <MainRouter />

    </Router>
  );
};

export default App;
