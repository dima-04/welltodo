import React from 'react';
import './App.css';
import Header from './component/AppHeader';
import AppFooter from './component/AppFooter';
import { Container } from 'react-materialize';
import Home from './component/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';

class App extends component {
  constructor() {
    super();
    const token = localStorage.getItem("jwtToken");
    const decoded = token != null ? jwt_decode(token) : {};
    this.state = {
      user: decoded,
      token: token
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const newState = {...this.state};
    newState.redirect = false;
    this.setState(newState);
  }

  handleLogin(token) {
    token = token.replace("Bearer ", "");
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode(token);
    this.setState({user: decoded, token: token, redirect: true});
  }
  
  handleLogout() {
    localStorage.removeItem("jwtToken");
    this.setState({user: {}, token: null, redirect: true});
  };

  render() {
    return (
      <Container>
        <Header />

        <Router>
          <Route exact path="/" component={() => <Home user="dima" />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/Signup" component={() => <Signup />} />

        </Router>
        <AppFooter />
      </Container>
    );
  }
  }

  export default App;
