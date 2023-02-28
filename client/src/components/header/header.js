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
    const [isLogged] = (state.userAPI.isLogged)
    // const [isAdmin] = (state.userAPI.isAdmin)
    const [cart] = state.userAPI.cart

    const logoutUser = async() => {
        await axios.get('/user/logout')
        localStorage.clear()
        // setIsAdmin(false)
        // setIsLogged(false)
        window.location.href = "/"
    }

    // const adminRouter = () => {
    //     return(
    //         <>
    //             <li><Link to="/create_product">Thêm sản phảm</Link></li>
    //             <li><Link to="/category">Danh sách sản phảm</Link></li>
    //         </>
    //     )
    // }
        
    const  loggedRouter = () =>{
        return(
            <>
                {/* <li><Link to="/history">Lịch sử mua hàng</Link></li> */}
                <li><Link to="/" onClick={logoutUser}>Đăng xuất</Link></li>
            </>
        )
    }

    return(
    <>
    <header className=" bg-light">
        <div className="container bg-light">
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><h2>Snow shop</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/" className="header-link"> Trang chủ</Nav.Link>
                    <Nav.Link href="/product" className="header-link">Sản phẩm </Nav.Link>

                    <NavDropdown title="Tài khoản" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3"> <Link to='/register'>Đăng ký</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action4"> {
                            isLogged ? loggedRouter():  <li> <Link to='/login'>Đăng nhập</Link></li>
                        }
                    </NavDropdown.Item>
                    
                    </NavDropdown>
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Tìm kiếm"
                    className=""
                    aria-label="Search"
                    />
                    <Button variant="outline-secondary">
                        <img src={Search} width="20" alt=""/>
                    </Button>
                    <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                                <img src={Cart} width="30" alt=""/>
                        </Link>
                    </div>

                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
   
    </header>      
     </>
     )
}

export default Header


