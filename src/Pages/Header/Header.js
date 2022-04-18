import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo01.png'
import './Header.css'


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        < >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img className='logo' src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="home#home">Home</Nav.Link>
                            <Nav.Link href="services#home">Services</Nav.Link> */}
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <Button className='bg-dark' onClick={handleSignOut}>Sign Out</Button>
                                    :
                                    <Nav.Link as={Link} to="signin">Sign In</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </ >
    );
};

export default Header;