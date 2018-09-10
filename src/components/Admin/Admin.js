import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Admin.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
// import {
//     Form,
//     FormGroup,
//     Label,
//     Input,
//     Button,
//     Row,
//     Col
// } from 'reactstrap';
// import {
//     fetchBlogPeek
//   } from '../../actions/homeAction';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false
        };
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
    }

    render() {
    
        return [
            <div className="Admin">
                <header>
                    <Navigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="">
                    
                </section>
            </div>,
            <Footer />
        ];
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    // fetchBlogPeek
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
