import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import AdminRoutes from './AdminRoutes';
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


export class AdminContainer extends Component {
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
            <div className="AdminContainer">
                <AdminRoutes {...this.props} {...this.state} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    // fetchBlogPeek
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);