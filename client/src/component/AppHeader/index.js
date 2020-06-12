import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
import "./style.css";
import ListAltIcon from '@material-ui/icons/ListAlt';

class Header extends Component {

    render(){
    return (
         <div>{!this.props.user.id ? (
        <Navbar 
        className="app-header "
            alignLinks="right"
            brand={<a className="brand-logo" href="/"><ListAltIcon /> Well To Do</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="/login">
                Log In 
            </NavItem>
            <NavItem href="/Signup">
                Sign Up
            </NavItem>
        </Navbar>
     )
     :(
    <Navbar className="app-header "
            alignLinks="right"
            brand={<a className="brand-logo" href="/"><ListAltIcon /> Well To Do</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="/">
              My Todos
          </NavItem>
            <NavItem href="/logout">
              Logout
          </NavItem>
          </Navbar>

    )}
    

      </div>
     );
}
}


export default Header;