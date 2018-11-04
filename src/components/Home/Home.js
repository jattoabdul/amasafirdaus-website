import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import BlogPeekTabs from './BlogPeekTabs';
import { BlogPeekTab } from './BlogPeekTab';
import { BlogPeekTabContent } from './BlogPeekTabContent';
import hijab from '../../assets/hijab.svg';
import lawBook from '../../assets/law_book.jpeg';
import {
    Row,
    Col
} from 'reactstrap';
import {
    fetchBlogPeek
  } from '../../actions/homeAction';
import {
    subscribeUser
  } from '../../actions/contactAction';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavDropdownOpen: false,
            activeAboutItem: 'biography',
            email: ''
        };
    }

    componentDidMount() {
        this.props.fetchBlogPeek();
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

    toggleAboutItem = (event) => {
        const itemId = event.target.id;
        this.setState({
            activeAboutItem: itemId
        });
    }

    render() {
        const { activeAboutItem, email } = this.state;
        const {
            blogPeek,
            // errorfetchingBlogPeek,
            isFetchingBlogPeek
        } = this.props;

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
                            <div className={`about-content-wrapper ${ activeAboutItem === 'biography' ? 'active' : ''}`}>
                                <h3 className="biography-heading">BIOGRAPHY</h3>
                                <p className="biography-text">Born in 1987, American actress Samira Wiley made a splash onto the Hollywood scene starting in 2013 when she began playing Poussey Washington on Netflix's Orange Is the New Black (OITNB). In 2016 Wiley guest starred in FX/FXX's comedy You're the Worst before picking up a role on another streaming hit, The Handmaid's Tale, as Moira. Wiley has also appeared on the big screen, including the Kathryn Bigelow-directed period crime drama Detroit (2017).</p>
                                <p className="biography-text">Tempore rem voluptatem distinctio natus pariatur, ea minima totam. Provident, recusandae quod. Ullam ut sunt quis numquam dolorem, magnam delectus ducimus non.</p>
                            </div>
                            <div className={`about-content-wrapper ${ activeAboutItem === 'education' ? 'active' : ''}`}>
                                <h3 className="biography-heading">Education</h3>
                                <p className="biography-text">Samira Denise Wiley was born on April 15, 1987 and was raised in Washington D.C. with her two siblings by co-pastors Christine and Dennis Wiley. As leaders of the Covenant Baptist United Church of Christ, Wiley's parents have been called "pillars of the LGBT religious community" as they had once been the only church in their denomination to have performed same-sex unions in the D.C. area.</p>
                                <p className="biography-text">After graduating from the Duke Ellington School of the Arts, Wiley moved to New York City to attend the famed Juilliard School where she focused on theatre performance, earning her degree in 2010.</p>
                            </div>
                            <div className={`about-content-wrapper ${ activeAboutItem === 'awwards' ? 'active' : ''}`}>
                                <h3 className="biography-heading">Awwards</h3>
                                <p className="biography-text">Won the woman of the year awward. Won the woman of the year awward. Won the woman of the year awward. Won the woman of the year awward. Won the woman of the year awward.</p>
                                <p className="biography-text">Won the woman of the year awward. Won the woman of the year awward. Won the woman of the year awward. Won the woman of the year awward. Won the woman of the year awward.</p>
                            </div>
                        </Col>
                        <Col md="6" xs="12" sm="6" className="about-item-menu">
                            <div className="my-picture-container">
                                <img src={hijab} alt="firdaus profile dp"/>
                            </div>
                            <ul className="numbered-links">
                                <li>
                                    <span className="link-number">01</span>
                                    <span
                                        id='biography'
                                        onClick={this.toggleAboutItem}
                                        className={`link-name ${ activeAboutItem === 'biography' ? 'active' : ''}`}>
                                        Biography
                                    </span>
                                </li>
                                <li>
                                    <span className="link-number">02</span>
                                    <span
                                        id='education'
                                        onClick={this.toggleAboutItem}
                                        className={`link-name ${ activeAboutItem === 'education' ? 'active' : ''}`}>
                                        Education
                                    </span>
                                </li>
                                <li>
                                    <span className="link-number">03</span>
                                    <span
                                        id='awwards'
                                        onClick={this.toggleAboutItem}
                                        className={`link-name ${ activeAboutItem === 'awwards' ? 'active' : ''}`}>
                                        Awwards
                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <p className="section-info">ABOUT ME</p>
                    </Row>
                </section>
                <section className="blog-peek-section">
                    <p className="section-info">BLOG PEEK</p>
                    {isFetchingBlogPeek ? <p>blog peeks loading...</p> :
                        <BlogPeekTabs defaultActiveTabIndex={0}>
                            {Object.keys(blogPeek).map((key, value) => (
                                <BlogPeekTab categoryName={key} key={key} linkClassName={'cats__item'}>
                                {blogPeek[`${key}`].map((post) => (
                                    <BlogPeekTabContent post={post} key={key} postImage={lawBook}/>
                                    )
                                    )}
                                </BlogPeekTab>
                            ))}
                        </BlogPeekTabs>
                    }
                    <a className="visit-blog" href="/blog">Visit Blog</a>
                </section>
            </div>,
            <Footer key={'footer'} email={email} handleSubscribeInput={this.handleSubscribeInput} handleSubscribeSubmit={this.handleSubscribeSubmit} />
        ];
    }
}

const mapStateToProps = state => {
    return {
        isFetchingBlogPeek: state.homeReducer.isFetchingBlogPeek,
        errorfetchingBlogPeek: state.homeReducer.errorfetchingBlogPeek,
        blogPeek: state.homeReducer.blogPeek,
        // subscribe actions states
        successPostingSubscriber: state.contactReducer.successPostingSubscriber,
        errorPostingSubscriber: state.contactReducer.errorPostingSubscriber,
        isPostingSubscriber: state.contactReducer.isPostingSubscriber
    }
};

const mapDispatchToProps = {
    fetchBlogPeek,
    subscribeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
