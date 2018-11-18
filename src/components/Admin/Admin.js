import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './Admin.scss';
import { AdminNavigation } from '../Partials/AdminNavigation';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import { ModalContainer } from '../Partials/ModalContainer';
import {
    // Form,
    // FormGroup,
    InputGroup,
    Label,
    // Button,
    // Row,
    // Col,
    Input
} from 'reactstrap';
import {
    fetchBlogPosts,
    fetchBlogPostsByCategory,
    fetchAdminBlogPosts,
    fetchCategories,
    createNewBlogPost,
    handleUpdateBlogPost,
    removeBlogPost
  } from '../../actions/blogAction';
import {
    subscribeUser
  } from '../../actions/contactAction';
import imageUpload from '../../utils/imageUpload';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false,
            isModalOpen: false,
            email: '',
            actionName: '',
            currentCategory: 'All',
            postsPerPage: 10,
            singlePost: {},
            content: '',
            thumbnailUrl: '',
            isUploading: false
        };
    }

    handleSubscribeInput = (event) => {
        this.setState({ email: event.target.value });
    }

    handleSubscribeSubmit = () => {
        const email =this.state.email;
        this.props.subscribeUser(email);
        this.setState({ email: '' });
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
    }

    toggle = (action='', post={}) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            actionName: action,
            singlePost: post
          });
    }

    handleRefresh = (limit = 10, page = 1) => {
        limit = this.state.postsPerPage || limit
        this.props.fetchAdminBlogPosts(page, limit);
        this.props.fetchCategories();
        
    }

    handlePageClick = (page) => {
        const selectedPage = Math.ceil(page.selected + 1);
        const limit = this.state.postsPerPage;
        this.props.fetchAdminBlogPosts(selectedPage, limit);
    }

    handleOnSelectCategory = (event) => {
        this.setState({ currentCategory: event.target.value }, () => this.props.fetchBlogPostsByCategory(this.state.currentCategory, this.state.postsPerPage));
    }

    handleOnChangeNoPerPage = (event) => {
        this.setState({
            postsPerPage: Number(event.target.value)
        }, () => this.handleRefresh(this.state.postsPerPage));
    }

    /** for all form input changes */
    handleOnChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    /** for all form checkbox changes */
    handleOnCheckBox = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    }

    /** for all form multi select changes */
    handleOnMultiSelect = (event) => {
        const options = event.target.options;
        const values = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                values.push(options[i].value);
            }
        };
        this.setState ({
            [event.target.name]: values
        });
    }

    /** for all tinymce input changes */
    handleEditorChange = (event) => {
        this.setState({
            content: event.target.getContent()
          });
    }

    /** for all upload file/images changes */
    handleUpload = (images) => {
        this.setState({ isUploading: true });
        imageUpload(images).then((response) => {
          const { body } = response;
          const fileUrl = body.secure_url;
    
          if (fileUrl) {
            this.setState({
              thumbnailUrl: fileUrl,
              isUploading: false
            });
          }
        });
      }

    addPostAction = () => {
        let { title, desc, content, published, thumbnailUrl, categories } = this.state;
        categories = categories.map(function (cat) { 
            return parseInt(cat, 10); 
          }).join(',');

        let isPublished = undefined;
        if (published === true) {
            isPublished = published.toString();
        } else if (published === false) {
            isPublished = published.toString();
        } else {
            isPublished = 'false'
        }

        this.props.createNewBlogPost({ title, desc, content, published: isPublished, thumbnailUrl, categories });
        this.toggle('');
    }

    deletePostAction = (post) => {
        this.props.removeBlogPost(post.id);
        this.toggle('');
        this.props.fetchAdminBlogPosts(1, this.state.postsPerPage);
    }

    updatePostAction = (post) => {
        let { title, desc, content, published, thumbnailUrl, categories } = this.state;
        categories = categories && categories.map(function (cat) { 
            return parseInt(cat, 10); 
          }).join(',');

        let isPublished = undefined;
        if (published === true) {
            isPublished = published.toString();
        } else if (published === false) {
            isPublished = published.toString();
        } else {
            isPublished = 'false'
        }

        this.props.handleUpdateBlogPost(post.id, { title, desc, content, published: isPublished, thumbnailUrl, categories });
        this.toggle('');
    }

    componentDidMount() {
        this.props.fetchAdminBlogPosts();
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
            // const postSlug = post.title.replace(/\s+/g, '-').toLowerCase();

            return (
                <tr id={post.id} key={key}>
                    <th scope="row">#{post.id}</th>
                    <td>{post.title}</td>
                    <td><div className="post-desc-td">{post.desc}</div></td>
                    <td><a href={post.thumbnailUrl} target="_blank">{post.thumbnailUrl}</a></td>
                    {(post.publishedAt !== null ?
                        <td>Published</td> : <td>Unpublished</td>
                    )}
                    <td>
                        <Moment format="MMM D, YYYY hh:mm" withTitle>
                            {post.publishedAt}
                        </Moment>
                    </td>
                    <td>
                        <Moment format="MMM D, YYYY hh:mm" withTitle>
                            {post.createdAt}
                        </Moment>
                    </td>
                    <td>
                        <span className="edit-icon add-post" onClick={() => this.toggle('Update Post', post)}></span>
                        <span className="remove-icon update-post" onClick={() => this.toggle('Delete Post', post)}></span>    
                    </td>
                </tr>
            );
        });
    
        return [
            <div className="Admin">
                <header>
                    <AdminNavigation
                        isOpen={isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="blog-list-container">
                    <div className="blog-list-top-section">
                        <div className="blog-list-table-title">
                            <span className="table-title-text">All Posts</span>
                            <div className="line">
                                <span className="long-line"></span>
                                <span className="short-line"></span>
                            </div>
                        </div>
                        <div className="add-blog-container">
                            <div className="refresh-blog-btn" onClick={this.handleRefresh}>
                                <span>Refresh</span>
                                {false ? <div className="loader absolute"></div> : ''}
                            </div>
                            <div className="add-blog-btn"  onClick={() => this.toggle('Add Post')}>
                                <span>Add Post</span>
                            </div>
                        </div>
                    </div>
                    {/** main section */}
                    <div className="blog-list-table-section">
                        <div className="table-filters">
                            <InputGroup className="search-filter">
                                <Label for="search">Search</Label>
                                <Input className="search-input" placeholder="Search" name="search" id="search" />
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
                            <InputGroup className="category-filter">
                                <Label for="categories">Category</Label>
                                <Input className="select-elem" type="select" name="select" id="categories" value={currentCategory} onChange={this.handleOnSelectCategory}>
                                {categories && categories.map((category, key) =>
                                    <option value={`${category.id}`} key={key}>{category.name}</option>)}
                                <option value="All">All</option>
                                </Input>
                            </InputGroup>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Post ID</th>
                                    <th scope="col">Post Title</th>
                                    <th scope="col">Short Description</th>
                                    <th scope="col">Thumbnail Url</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Published At</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isFetchingBlogPosts ? <tr><td align="center" colSpan="10" className="loader">Loading....</td></tr> : 
                                (parseInt(totalCount, 10) === 0 ? <tr><td align="center" colSpan="10">No Posts at the moment</td></tr> : renderPosts)}
                            </tbody>
                        </table>
                        {(
                            parseInt(totalCount, 10) === 0 ?
                            '' :
                            <Pagination
                                handlePageClick={this.handlePageClick}
                                pageCount={parseInt(pageCount, 10)}
                            />
                        )}
                    </div>

                    <ModalContainer isModalOpen={this.state.isModalOpen} toggle={this.toggle} actionName={this.state.actionName} addPostAction={this.addPostAction} deletePost={this.deletePostAction} updatePost={this.updatePostAction} post={this.state.singlePost} onChange={this.handleOnChange} onCheckBox={this.handleOnCheckBox} onMultiSelect={this.handleOnMultiSelect} onHandleEditorChange={this.handleEditorChange} onUpload={this.handleUpload} postCategories={categories} />
                </section>
            </div>,
            <Footer key={'footer'} email={email} handleSubscribeInput={this.handleSubscribeInput} handleSubscribeSubmit={this.handleSubscribeSubmit} />
        ];
    }
}

const mapStateToProps = state => {
    return {
        isFetchingBlogPosts: state.blogReducer.isFetchingBlogPosts,
        errorfetchingBlogPosts: state.blogReducer.errorfetchingBlogPosts,
        blogPosts: state.blogReducer.blogPosts,
        blogPostPaginationData: state.blogReducer.blogPostPaginationData,
        errorDeletingBlogPost: state.blogReducer.errorDeletingBlogPost,
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

const mapDispatchToProps = {
    fetchBlogPosts,
    fetchAdminBlogPosts,
    fetchBlogPostsByCategory,
    fetchCategories,
    createNewBlogPost,
    handleUpdateBlogPost,
    subscribeUser,
    removeBlogPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
