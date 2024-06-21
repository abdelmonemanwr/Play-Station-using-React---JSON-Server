import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export function MyNavbar() {
    const cartCount = useSelector(state => state.cart.count);

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
                    <Link to='/cart' className='nav-link'>
                        <i className="fa fa-shopping-cart"></i> Cart ({cartCount})
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
