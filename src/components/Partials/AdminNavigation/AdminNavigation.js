import React from 'react';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './AdminNavigation.scss';


const AdminNavigation = props => {
    return (
        <div className="AdminNavigation">
            <Navbar className="top-nav" light expand="md">
                <NavbarBrand href="/">
                    <div className="navigation-logo">Firdaus</div>
                </NavbarBrand>
                <NavbarToggler onClick={props.toggle} />
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/admin/dashboard">Admin Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">View Blog</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AdminNavigation;
