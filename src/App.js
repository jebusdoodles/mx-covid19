import React from 'react';
//react router
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import HomeContainer from './containers/HomeContainer'; 
import './App.sass';

function App() {
  return (
    <Router>
      <div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomeContainer}></Route>
      </div>
    </Router>
  );
}

export default App;
