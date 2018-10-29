import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Blog.scss';
import roughPic from '../../assets/rough.jpeg';
import {
    InputGroup,
    Label,
    Input
} from 'reactstrap';
import { BlogNavigation } from '../Partials/BlogNavigation';
import { Pagination } from '../Partials/Pagination';
import { Footer } from '../Partials/Footer';
import {
    fetchBlogPosts,
    fetchBlogPostsByCategory,
    fetchCategories
  } from '../../actions/blogAction';
import {
    subscribeUser
  } from '../../actions/contactAction';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false,
            postsPerPage: 10,
            currentCategory: 'All',
            email: ''
        };
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
    }

    handleRefresh = (limit = 10, page = 1) => {
        limit = this.state.postsPerPage || limit
        this.props.fetchBlogPosts(page, limit);
        this.props.fetchCategories();
    }

    handlePageClick = (page) => {
        const selectedPage = Math.ceil(page.selected + 1);
        const limit = this.state.postsPerPage;
        this.props.fetchBlogPosts(selectedPage, limit);
    }

    handleOnChangeNoPerPage = (event) => {
        this.setState({
            postsPerPage: Number(event.target.value)
        }, () => this.handleRefresh(this.state.postsPerPage));
    }

    handleOnSelectCategory = (event) => {
        this.setState({ currentCategory: event.target.value }, () => this.props.fetchBlogPostsByCategory(this.state.currentCategory, this.state.postsPerPage));
    }

    handleSubscribeInput = (event) => {
        this.setState({ email: event.target.value });
    }

    handleSubscribeSubmit = () => {
        const email =this.state.email;
        this.props.subscribeUser(email);
        this.setState({ email: '' });
    }

    componentDidMount() {
        this.props.fetchBlogPosts();
        this.props.fetchCategories();
        this.interval = setInterval(this.handleRefresh, 180000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {
            blogPostPaginationData: {
                totalCount,
                pageCount,
                // pageSize,
                // page
            },
            blogPosts,
            // errorfetchingBlogPosts,
            categories,
            // errorfetchingCategories,
            // isFetchingCategories,
            isFetchingBlogPosts
        } = this.props

        const { isNavDropdownOpen, currentCategory, email } = this.state;

        const renderPosts = blogPosts.map((post, key) => {
            const postSlug = post.title.replace(/\s+/g, '-').toLowerCase();

            return (
                <div className="blog-post" key={key}>
                    <div className="blog-content">
                        <h4 className="post-title">{post.title}</h4>
                        <p>
                            <span className="post-category">{post.Categories.map((c) => c.name).join(', ')}</span>
                            <span className="post-time">
                                <Moment format="MMM D, YYYY" withTitle>
                                {post.publishedAt}
                                </Moment>
                            </span>
                        </p>
                        <p className="post-content" dangerouslySetInnerHTML={{__html: post.desc}}></p>
                        <Link to={`/blog/${post.id}/${postSlug}`} className="more-content">read more</Link>
                    </div>
                    <div className="blog-pic">
                        <img src={ post.thumbnailUrl || roughPic} alt="Rough"/>
                    </div>
                </div>
            );
        });

        return [
            <div key={'blog-content'} className="Blog">
                <header>
                    <BlogNavigation
                        isOpen={isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="blog-posts">
                    <div className="blog-posts-filters">
                        <InputGroup className="category-filter">
                            <Label for="categories">Category</Label>
                            <Input className="select-elem" type="select" name="select" id="categories" value={currentCategory} onChange={this.handleOnSelectCategory}>
                            {categories && categories.map((category, key) =>
                                <option value={`${category.id}`} key={key}>{category.name}</option>)}
                            <option value="All">All</option>
                            </Input>
                        </InputGroup>
                        <InputGroup className="no-of-record-filter">
                            <Label for="no-of-record">No of Post</Label>
                            <Input className="select-elem" type="select" name="select" id="no-of-record" defaultValue={'10'} value={this.state.postPerPage} onChange={this.handleOnChangeNoPerPage}>
                            <option value="1">1</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value={totalCount || "1000"}>All</option>
                            </Input>
                        </InputGroup>
                        <InputGroup className="search-filter">
                            <Label for="search">Search</Label>
                            <Input className="search-input" placeholder="Search" name="search" id="search" />
                        </InputGroup>
                    </div>
                    <div className="blog-posts-list-container">
                        {isFetchingBlogPosts ? <div className="loader">Loading....</div> : 
                        (parseInt(totalCount, 10) === 0 ? <p className="empty-posts">No Posts at the moment</p> : renderPosts) }
                    </div>
                    {(
                        parseInt(totalCount, 10) === 0 ?
                        '' :
                        <Pagination
                            handlePageClick={this.handlePageClick}
                            pageCount={parseInt(pageCount, 10)}
                        />
                    )}
                </section>
            </div>,
            <Footer key={'footer'} email={email} handleSubscribeInput={this.handleSubscribeInput} handleSubscribeSubmit={this.handleSubscribeSubmit} />
        ];
    }
}

const mapDispatchToProps = {
    fetchBlogPosts,
    fetchBlogPostsByCategory,
    fetchCategories,
    subscribeUser
};

const mapStateToProps = state => {
    return {
        isFetchingBlogPosts: state.blogReducer.isFetchingBlogPosts,
        errorfetchingBlogPosts: state.blogReducer.errorfetchingBlogPosts,
        blogPosts: state.blogReducer.blogPosts,
        blogPostPaginationData: state.blogReducer.blogPostPaginationData,
        // categories
        categories: state.blogReducer.categories,
        isFetchingCategories: state.blogReducer.isFetchingCategories,
        errorfetchingCategories: state.blogReducer.errorfetchingCategories,
        // subscribe actions states
        successPostingSubscriber: state.contactReducer.successPostingSubscriber,
        errorPostingSubscriber: state.contactReducer.errorPostingSubscriber,
        isPostingSubscriber: state.contactReducer.isPostingSubscriber
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);


// "page": 1, current page
// "pageSize": 2, no of items on the current Page
// "totalCount": 7, no of total items in the system
// "pageCount": 4, no of total pages