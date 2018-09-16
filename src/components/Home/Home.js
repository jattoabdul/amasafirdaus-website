import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
// import { Pagination } from '../Partials/Pagination';
import hijab from '../../assets/hijab.svg';
import lawBook from '../../assets/law_book.jpeg';
// import full_bloom from '../../assets/full-bloom.png';
import {
    // InputGroup,
    // Input,
    // Label,
    // Container,
    Row,
    Col
} from 'reactstrap';
import {
    fetchBlogPeek
  } from '../../actions/homeAction';

class Home extends Component {
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
            <div className="Home">
                <header>
                    <Navigation
                        isOpen={this.state.isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                </header>
                <section className="me">
                    <Row className="jump1">
                        <Col md="6" xs="12" sm="6" className="about-item-content">
                            <img className="mobile-head-hijab" src={hijab} alt="firdaus amasa profile dp"/>
                            <p className="flow-text professional-titles">
                                Muslimah | Barrister | Writer
                            </p>
                            <h1 className="my-name">Firdaus <br/> <span>Amasa</span> </h1>
                            <div className="about-content-wrapper biography active">
                                <h3 className="biography-heading">BIOGRAPHY</h3>
                                <p className="biography-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta autem, quidem saepe officia mollitia, corporis rem aliquid nisi deserunt beatae est aliquam eos necessitatibus reprehenderit vel pariatur! Ad, modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                <p className="biography-text">Tempore rem voluptatem distinctio natus pariatur, ea minima totam. Provident, recusandae quod. Ullam ut sunt quis numquam dolorem, magnam delectus ducimus non.</p>
                            </div>
                            <div className="about-content-wrapper next-content">
                                <h3 className="biography-heading">Next Content</h3>
                                <p className="biography-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta autem, quidem saepe officia mollitia, corporis rem aliquid nisi deserunt beatae est aliquam eos necessitatibus reprehenderit vel pariatur! Ad, modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                <p className="biography-text">Tempore rem voluptatem distinctio natus pariatur, ea minima totam. Provident, recusandae quod. Ullam ut sunt quis numquam dolorem, magnam delectus ducimus non.</p>
                            </div>
                        </Col>
                        <Col md="6" xs="12" sm="6" className="about-item-menu">
                            <div className="my-picture-container">
                                <img src={hijab} alt="firdaus profile dp"/>
                            </div>
                            <ul className="numbered-links">
                                <li><span className="link-number">01</span><span className="link-name active">Biography</span></li>
                                <li><span className="link-number">02</span><span className="link-name">Next Content</span></li>
                                <li><span className="link-number">03</span><span className="link-name">Other Content</span></li>
                                <li><span className="link-number">04</span><span className="link-name">Other Content</span></li>
                                <li><span className="link-number">05</span><span className="link-name">Other Content</span></li>
                            </ul>
                        </Col>
                        <p className="section-info">ABOUT ME</p>
                    </Row>
                </section>
                <section className="blog-peek-section">
                    <p className="section-info">BLOG PEEK</p>
                    <div className="blog-peek-categories">
                        <ul className="cats">
                            <li className="cats__item active">Literature</li>
                            <li className="cats__item">Thoughts</li>
                            <li className="cats__item">African HIstory</li>
                            <li className="cats__item">Human Rights</li>
                            <li className="cats__item">Islam &amp; Muslims</li>
                        </ul>
                    </div>
                    <div className="blog-peek-category-posts">
                        <div className="blog-peek-category__post">
                            <img className="peek-image" src={lawBook} alt=""/>
                            <h4 className="peek-text">My thoughts on sleeping alone on the couch without insurance</h4>
                            <p className="peek-sneak">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime eligendi...</p>
                            <p className="peek-post-time">12<sup>th</sup> AUG, 2018</p>
                            <span className="more">Read more</span>
                        </div>
                        <div className="blog-peek-category__post">
                            <img className="peek-image" src={lawBook} alt=""/>
                            <h4 className="peek-text">My thoughts on sleeping alone on the couch without insurance</h4>
                            <p className="peek-sneak">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime eligendi...</p>
                            <p className="peek-post-time">12<sup>th</sup> AUG, 2018</p>
                            <span className="more">Read more</span>
                        </div>
                        <div className="blog-peek-category__post">
                            <img className="peek-image" src={lawBook} alt=""/>
                            <h4 className="peek-text">My thoughts on sleeping alone on the couch without insurance</h4>
                            <p className="peek-sneak">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime eligendi...</p>
                            <p className="peek-post-time">12<sup>th</sup> AUG, 2018</p>
                            <span className="more">Read more</span>
                        </div>
                        <div className="blog-peek-category__post">
                            <img className="peek-image" src={lawBook} alt=""/>
                            <h4 className="peek-text">My thoughts on sleeping alone on the couch without insurance</h4>
                            <p className="peek-sneak">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime eligendi...</p>
                            <p className="peek-post-time">12<sup>th</sup> AUG, 2018</p>
                            <span className="more">Read more</span>
                        </div>
                    </div>
                    <a className="visit-blog" href="/blog">Visit Blog</a>
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
    fetchBlogPeek
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
