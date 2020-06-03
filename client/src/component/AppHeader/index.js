import React from 'react';
import { Navbar, NavItem, Icon, Button } from 'react-materialize';
import "./style.css";
import ListAltIcon from '@material-ui/icons/ListAlt';

function Header() {
    return (
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
                Sign In
            </NavItem>
            <NavItem href="/Signup">
                Sign Up
            </NavItem>
        </Navbar>
    );
}

export default Header;