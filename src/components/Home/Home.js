import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { ModalContainer } from '../Partials/ModalContainer';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import {
    InputGroup,
    Input,
    Label
} from 'reactstrap';
// import {
//     fetchGuest,
//     createGuest,
//     createGuestTag,
//     handleUpdateGuestTimeOut,
//     setSelectedLocation
//   } from '../../actions/guestAction';

class Home extends Component {

    render() {
    
        return [
            <div className="Home">
                <p>heading</p>
                <p>body</p>
            </div>,
            <Footer />
        ];
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
