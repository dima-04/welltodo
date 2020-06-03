import React from 'react';
import './App.css';
import Header from './component/AppHeader';
import AppFooter from './component/AppFooter';
import { Container } from 'react-materialize';
import Home from './component/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Route exact path="/"component={() => <Home user="dima"/>} />
        <Route exact path="/login"component={() => <Login />} />
        <Route exact path="/Signup"component={() => <Signup/>} />

      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
