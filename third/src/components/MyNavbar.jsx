import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function MyNavbar() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Arena Station</Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-success fw-bold nav-link' : 'nav-link'}>
                        Home
                    </NavLink>
                    <NavLink to='/products' className={({ isActive }) => isActive ? 'text-success fw-bold nav-link' : 'nav-link'}>
                        Products
                    </NavLink>
                    <NavLink to='/products/0/edit' className={({ isActive }) => isActive ? 'text-success fw-bold nav-link' : 'nav-link'}>
                        <i className="fa fa-plus-square-o"></i> Add Product
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
