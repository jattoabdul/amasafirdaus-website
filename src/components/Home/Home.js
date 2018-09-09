import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import hijab from '../../assets/hijab.svg';
import lawBook from '../../assets/law_book.jpeg';
import full_bloom from '../../assets/full-bloom.png';
import {
    InputGroup,
    Input,
    Label,
    Container,
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
                        <Col md="6">
                            <p className="flow-text professional-titles">
                                Muslimah | Barrister | Writer
                            </p>
                            <h1 className="my-name">Firdaus <br/> <span>Amasa</span> </h1>
                            <h3 className="biography-heading">BIOGRAPHY</h3>
                            <p className="biography-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta autem, quidem saepe officia mollitia, corporis rem aliquid nisi deserunt beatae est aliquam eos necessitatibus reprehenderit vel pariatur! Ad, modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p className="biography-text">Tempore rem voluptatem distinctio natus pariatur, ea minima totam. Provident, recusandae quod. Ullam ut sunt quis numquam dolorem, magnam delectus ducimus non.</p>
                        </Col>
                        <Col md="6">
                            <div className="my-picture-container">
                                <img src={hijab} alt="firdaus profile dp"/>
                            </div>
                            <ul className="numbered-links">
                                <li><span className="link-number">01</span><span className="link-name active">Biography</span></li>
                                <li><span className="link-number">02</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">03</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">04</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">05</span><span className="link-name">Biography</span></li>
                            </ul>
                        </Col>
                        <p className="section-info">ABOUT ME</p>
                    </Row>
                </section>
                <section className="blog-peek-section">
                    <p className="section-info">BLOG PEEK</p>
                    <Row className="blog-peek">
                        <div className="container">
                        <Col md={{size: 7, offset: 5}}>
                            {/* add active-box when a .cat is hovered! */}
                            <div className="peek-box">
                                <ul className="cats">
                                    <li className="cat">Literature</li>
                                    <li className="cat active">Thoughts</li>
                                    <li className="cat">African HIstory</li>
                                    <li className="cat">Human Rights</li>
                                    <li className="cat">Islam &amp; Muslims</li>
                                </ul>
                                <Row className="peeks">
                                    <Col md="6" className="peek">
                                        <img className="peek-image" src={lawBook} alt=""/>
                                        <h4 className="peek-text">My thoughts on sleeping alone on the couch without insurance</h4>
                                        <p className="peek-sneak">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime eligendi...</p>
                                        <p className="peek-post-time">12<sup>th</sup> AUG, 2018</p>
                                        <span className="more">read more</span>
                                    </Col>
                                    <Col md="6" className="peek">
                                        <img className="peek-image" src={lawBook} alt=""/>
                                        <h4 className="peek-text">Some elements of our culture may be wrong, but our approach to fix it may be wrong as well</h4>
                                        <p className="peek-sneak">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime eligendi...</p>
                                        <p className="peek-post-time">15<sup>th</sup> SEPT, 2018</p>
                                        <span className="more">read more</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        </div>
                    </Row>
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
