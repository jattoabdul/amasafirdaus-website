import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Blog.scss';
import { BlogNavigation } from '../Partials/BlogNavigation';
import { Footer } from '../Partials/Footer';
import hallWay from '../../assets/hallWay.jpeg'
import {
    InputGroup,
    Label,
    Input
} from 'reactstrap';
// import {
//     fetchBlogPeek
//   } from '../../actions/homeAction';

class Blog extends Component {
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
            <div className="Blog">
                <header>
                    <BlogNavigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="blog-posts">
                    <div className="blog-posts-filters">
                        <InputGroup className="category-filter">
                            <Label for="categories">Category</Label>
                            <Input className="select-elem" type="select" name="select" id="categories">
                            <option value="law">Law</option>
                            <option value="islam">Islam</option>
                            <option value="right">Human Rights</option>
                            <option value="culture">Culture</option>
                            <option value="thoughs">Thoughts</option>
                            <option value="all">All</option>
                            </Input>
                        </InputGroup>
                        <InputGroup className="no-of-record-filter">
                            <Label for="no-of-record">No of Post</Label>
                            <Input className="select-elem" type="select" name="select" id="no-of-record">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="all">All</option>
                            </Input>
                        </InputGroup>
                    </div>
                    <div className="blog-posts-list-container">
                        {[...Array(30).keys()].map(() => 
                            <div className="blog-post">
                                <img src={hallWay} alt="Hall Way"/>
                            </div>
                        )}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
