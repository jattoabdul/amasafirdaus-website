import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Blog.scss';
import { BlogNavigation } from '../Partials/BlogNavigation';
import { Footer } from '../Partials/Footer';
import roughPic from '../../assets/rough.jpeg'
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
                        <InputGroup className="search-filter">
                            <Label for="search">Search</Label>
                            <Input className="search-input" placeholder="search" name="search" id="search" />
                        </InputGroup>
                    </div>
                    <div className="blog-posts-list-container">
                        {[...Array(30).keys()].map(() => 
                            <div className="blog-post">
                                <div className="blog-content">
                                    <h4 className="post-title">Wireframing and Prototyping: Present Past and Future</h4>
                                    <p>
                                        <span className="post-category">Design &amp; UI</span>
                                        <span className="post-time">April 16, 2000</span>
                                    </p>
                                    <p className="post-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, facere id. Dignissimos odit esse quisquam sint accusamus quod molestiae ad corrupti neque laboriosam culpa architecto commodi, optio illo temporibus reprehenderit</p>
                                    <a href="/blog/content" className="more-content">read more</a>
                                </div>
                                <div className="blog-pic">
                                    <img src={roughPic} alt="Rough"/>
                                </div>
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
