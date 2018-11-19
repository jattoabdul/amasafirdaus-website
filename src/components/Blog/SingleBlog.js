import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './SingleBlog.scss';
import { BlogNavigation } from '../Partials/BlogNavigation';
import { Footer } from '../Partials/Footer';
import hijabPink from '../../assets/hijabPink.svg'
import shareIcon from '../../assets/share.svg'
import viewIcon from '../../assets/view.svg'
import facebookCircular from '../../assets/facebook-circular.svg';
import twitterCircular from '../../assets/twitter-circular.svg';

import {
    fetchBlogPost
  } from '../../actions/blogAction';
  import {
    subscribeUser
  } from '../../actions/contactAction';

class SingleBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false,
            email: ''
        };
    }

    toggleHamburgerNav = () => {
        this.setState({
            isNavDropdownOpen: !this.state.isNavDropdownOpen
        });
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
        const { id } = this.props.match.params;
        this.props.fetchBlogPost(id);
    }

    render() {
        const {
            blogPost,
            // errorfetchingBlogPost,
            isFetchingBlogPost
        } = this.props

        const { email } = this.state;

        return [
            <div key={'single-blog-content'} className="SingleBlog">
                <header>
                    <BlogNavigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="single-blog-post">
                    <div className="share">
                        <h4 className="heading">Share</h4>
                        <img className="social-share" src={facebookCircular} alt="share to facebook"/>
                        <img className="social-share" src={twitterCircular} alt="share to twitter"/>
                    </div>
                    {isFetchingBlogPost ? <div className="blog-content loader">Loading....</div> : 
                        <div className="blog-content">
                            <p className="post-time">
                                <span><Moment format="MMM D, YYYY" withTitle>
                                {blogPost.publishedAt}
                            </Moment></span>
                                <span><Moment format="HH:mm A" withTitle>
                                {blogPost.publishedAt}
                            </Moment></span>
                            </p>
                            <h4 className="post-title">{blogPost.title}</h4>
                            <p className="post-summary">{blogPost.desc}</p>
                            <div className="post-author">
                                <img className="author-pic" src={hijabPink} alt="Firdaus Amasa Avatar"/>
                                <div className="author-info">
                                    <p className="name">{blogPost.User && blogPost.User.Profile.firstName} {blogPost.User && blogPost.User.Profile.lastName}</p>
                                    <p className="titles">Muslimah | Barrister | Writer</p>
                                </div>
                            </div>
                            <div className="post-body">
                                <div dangerouslySetInnerHTML={{__html: blogPost.content}}></div>
                            </div>
                            <div className="end-of-post">
                                <p className="dots">....</p>
                                <p className="may-like">
                                    <span className="ibeere">Do you like this article?</span>
                                    <span className="imoran">Share it with your friends <span role="img" aria-label="hug">🤗</span></span>
                                </p>
                                <div className="post-actions">
                                    <div className="views" title="views">
                                        <img src={viewIcon} alt="views"/>
                                        <span>{blogPost.readBy && blogPost.readBy.length}</span>
                                    </div>
                                    <div className="shares" title="shares">
                                        <img src={shareIcon} alt="shares"/>
                                        <span>0</span>
                                        <div className="share-mobile-pop-over active">
                                            <div className="s-m-pop-over-box">
                                                <ul className="share-mobile-link-container">
                                                    <li className="share-mobile-link-item">
                                                        <img className="social-share-mobile" src={facebookCircular} alt="share to facebook"/>
                                                        <span>Share on Facebook</span>
                                                    </li>
                                                    <li className="share-mobile-link-item">
                                                        <img className="social-share-mobile" src={twitterCircular} alt="share to twitter"/>
                                                        <span>Share on Twitter</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>
            </div>,
            <Footer key={'footer'} email={email} handleSubscribeInput={this.handleSubscribeInput} handleSubscribeSubmit={this.handleSubscribeSubmit} />
        ];
    }
}

const mapStateToProps = state => {
    return {
        isFetchingBlogPost: state.blogReducer.isFetchingBlogPost,
        errorfetchingBlogPost: state.blogReducer.errorfetchingBlogPost,
        blogPost: state.blogReducer.blogPost,
        // subscribe actions states
        successPostingSubscriber: state.contactReducer.successPostingSubscriber,
        errorPostingSubscriber: state.contactReducer.errorPostingSubscriber,
        isPostingSubscriber: state.contactReducer.isPostingSubscriber
    }
}

const mapDispatchToProps = {
    fetchBlogPost,
    subscribeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
