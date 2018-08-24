import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import {
    InputGroup,
    Input,
    Label
} from 'reactstrap';
import {
    fetchBlogPeek
  } from '../../actions/homeAction';

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
    fetchBlogPeek
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
