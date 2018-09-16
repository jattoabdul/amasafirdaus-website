import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SingleBlog.scss';
import { BlogNavigation } from '../Partials/BlogNavigation';
import { Footer } from '../Partials/Footer';
import hijabPink from '../../assets/hijabPink.svg'
import roughPic from '../../assets/rough.jpeg'
import shareIcon from '../../assets/share.svg'
import viewIcon from '../../assets/view.svg'
import facebookCircular from '../../assets/facebook-circular.svg';
import twitterCircular from '../../assets/twitter-circular.svg';
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
                    <div className="share">
                        <h4 className="heading">Share</h4>
                        <img className="social-share" src={facebookCircular} alt="share to facebook"/>
                        <img className="social-share" src={twitterCircular} alt="share to twitter"/>
                    </div>
                    
                    <div className="blog-content">
                        <p className="post-time">
                            <span>Oct 19, 2016</span>
                            <span>10:59 pm</span>
                        </p>
                        <h4 className="post-title">Wireframing and Prototyping: Present, Past, and Future</h4>
                        <p className="post-summary">By learning a small amount of tech skills, you as a non-technical startup founder, can support your company in smaller ways. Here&rsquo;s our list of Need-to-know Technical skills</p>
                        <div className="post-author">
                            <img className="author-pic" src={hijabPink} alt="Firdaus Amasa Avatar"/>
                            <div className="author-info">
                                <p className="name">Firdaus Amasa</p>
                                <p className="titles">Muslimah | Barrister | Writer</p>
                            </div>
                        </div>
                        <div className="post-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quia nisi maxime repellat nesciunt explicabo reiciendis incidunt suscipit sunt praesentium, ipsa natus quis, optio est? Aut adipisci sed pariatur veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ipsa repellendus quisquam odit minus, eveniet expedita? Rem odit tenetur ipsa dolor doloribus numquam dignissimos magni maxime, nihil neque. Exercitationem, magnam.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, accusamus doloremque aut asperiores beatae velit sit ex voluptatum sapiente nam harum molestiae, natus rerum, voluptas tempora laborum temporibus reiciendis debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis consequatur odit cupiditate qui ipsum? Quia voluptate nam quos laboriosam voluptatem deserunt expedita. Laudantium consequatur quidem aliquam et reiciendis, modi aspernatur.</p>
                            <ol>
                                <h4><li>Wireframing</li></h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, minus quod quam necessitatibus fugiat, ea, harum autem officia delectus quae quia numquam iste qui ut perspiciatis sint rem ipsam facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, in aut. Voluptatem assumenda, tempora consectetur quis commodi obcaecati, molestias omnis dolor dolore recusandae veritatis natus architecto numquam temporibus iure labore.</p>
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugiat molestiae exercitationem saepe, facilis mollitia, eos nisi laborum libero laboriosam placeat debitis? Laborum ad officiis quis dolorum vel ratione eius
                                </blockquote>
                            </ol>
                            <img src={roughPic} alt="Rough"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui maxime id at facilis. Reiciendis repellat, maiores rem numquam totam velit hic ratione sit quibusdam possimus eligendi cum aspernatur! Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit pariatur consectetur animi ad ipsum sed explicabo at. Doloremque, provident quas eveniet accusamus reiciendis exercitationem necessitatibus! Perspiciatis ab dicta praesentium. Enim</p>
                            <blockquote>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugiat molestiae exercitationem saepe, facilis mollitia, eos nisi laborum libero laboriosam placeat debitis? Laborum ad officiis quis dolorum vel ratione eius
                            </blockquote>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui maxime id at facilis. Reiciendis repellat, maiores rem numquam totam velit hic ratione sit quibusdam possimus eligendi cum aspernatur! Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit pariatur consectetur animi ad ipsum sed explicabo at. Doloremque, provident quas eveniet accusamus reiciendis exercitationem necessitatibus! Perspiciatis ab dicta praesentium. Enim</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui maxime id at facilis. Reiciendis repellat, maiores rem numquam totam velit hic ratione sit quibusdam possimus eligendi cum aspernatur! Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit pariatur consectetur animi ad ipsum sed explicabo at. Doloremque, provident quas eveniet accusamus reiciendis exercitationem necessitatibus! Perspiciatis ab dicta praesentium. Enim</p>
                            <img src={roughPic} alt="Rough"/>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui maxime id at facilis. Reiciendis repellat, maiores rem numquam totam velit hic ratione sit quibusdam possimus eligendi cum aspernatur! Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit pariatur consectetur animi ad ipsum sed explicabo at. Doloremque, provident quas eveniet accusamus reiciendis exercitationem necessitatibus! Perspiciatis ab dicta praesentium. Enim</p>
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
                                    <span>8,031</span>
                                </div>
                                <div className="shares" title="shares">
                                    <img src={shareIcon} alt="shares"/>
                                    <span>2,349</span>
                                    <div className="share-mobile-pop-over active">
                                        <ul>
                                            <li>Share on Facebook</li>
                                            <li>Share on Twitter</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
