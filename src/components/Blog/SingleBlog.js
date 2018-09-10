import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SingleBlog.scss';
import { BlogNavigation } from '../Partials/BlogNavigation';
import { Footer } from '../Partials/Footer';
// import hallWay from '../../assets/hallWay.jpeg'
// import {
//     Container,
//     Row,
//     Col
// } from 'reactstrap';

// import {
//     fetchBlogPeek
//   } from '../../actions/homeAction';

class SingleBlog extends Component {
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
            <div className="SingleBlog">
                <header>
                    <BlogNavigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="single-blog-post">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio blanditiis adipisci earum omnis impedit accusamus doloribus animi quibusdam laboriosam nostrum nisi repudiandae id ex delectus non, molestias, officiis perferendis facilis?</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
