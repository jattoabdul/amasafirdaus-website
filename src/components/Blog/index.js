import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Navigation } from '../Partials/Navigation';
// import { Footer } from '../Partials/Footer';
import BlogRoutes from './BlogRoutes';
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


export class BlogContainer extends Component {
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
        return (
            <BlogRoutes {...this.props} {...this.state} />
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    // fetchBlogPeek
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);