import React from 'react';
//react router
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import HomeContainer from './containers/HomeContainer'; 
import SEO from './components/SEO/SEO'
import './App.sass';

function App() {
  return (
    <Router>
    <SEO />
      <div>
        <Route exact path="/" component={HomeContainer}></Route>
      </div>
    </Router>
  );
}

export default App;
