import React,{Component} from 'react';
import './App.css';
import jwt_decode from "jwt-decode";
import Header from './component/AppHeader';
import AppFooter from './component/AppFooter';
import { Container } from 'react-materialize';
import Home from './component/Home';
import { BrowserRouter as Router, Route,Redirect  } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import Logout from './component/Logout';

class App extends Component {
  constructor() {
    super();
    const token = localStorage.getItem("jwtToken");
    const decoded = token != null ? jwt_decode(token) : {};
    this.state = {
      user: decoded,
      token: token,
      redirect:false
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
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <Container>
        <Header Home user={this.state.user}/>

        <Router>
        {this.renderRedirect()}
          <Route exact path="/" component={() => <Home user={this.state.user} />} />
          <Route exact path="/login" component={() => <Login handleLogin={this.handleLogin}/>} />
          <Route exact path="/Signup" component={() => <Signup  handleLogin={this.handleLogin}/>} />
          <Route exact path="/logout" component={() => <Logout logout={this.handleLogout} />} />
        </Router>
        <AppFooter />
      </Container>
    );
  }
  }

  export default App;
