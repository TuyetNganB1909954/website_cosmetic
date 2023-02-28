import React, { useContext } from "react";
import {GlobalState} from "../../GlobalState"
import {Link} from 'react-router-dom'
import Cart from './icon/cart.svg'
import Search from './icon/search.svg'
import axios from "axios";


// import {Container, Nav,Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    const state = useContext(GlobalState)
    const [isAdmin] = (state.userAPI.isAdmin)


    return(
    <>
    <header>
        <h2><Link to="/">
            {isAdmin ? 'Chào mừng đến với trang quản trị' :'Chào mừng đến với trang quản trị'} 
        </Link></h2>
        <hr/>
    </header>      
     </>
     )
}

export default Header
