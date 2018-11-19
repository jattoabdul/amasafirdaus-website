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
import './BlogNavigation.scss';


const BlogNavigation = props => {
    return (
        <div className="BlogNavigation">
            <Navbar className="top-nav" light expand="md">
                <NavbarBrand href="/">
                    <div className="navigation-logo">Firdaus</div>
                </NavbarBrand>
                <NavbarToggler onClick={props.toggle} />
                <Collapse isOpen={props.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Amasa Firdaus</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog & Stories</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default BlogNavigation;
