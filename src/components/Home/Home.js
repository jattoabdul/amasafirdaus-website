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
                                Muslimah | Writer | Activist | Lawyer | Enterpreneur
                            </p>
                            <h1 className="my-name">Firdaus <br/> <span>Amasa</span> </h1>
                            <div className={`about-content-wrapper ${ activeAboutItem === 'biography' ? 'active' : ''}`}>
                                <h3 className="biography-heading">BIOGRAPHY</h3>
                                <p className="biography-text">Born on 22nd Ramadan, 1414 A.H (4th March, 1994) in the city of Ilorin, Kwara State, into the family of Mallam Abdulsalam Oba Amasa and Mallamah Habibat Dupe Amasa. I was brought up alongside my siblings Lateefah, Hikmah, Tawakalt and Abdullahi in an Islamic way. In addition to the moral and spiritual education imbibed in us from home, we also attended the traditional madrasah (ilekewu) where we we learnt Arabic reading, Quran recitation and some other Islamic studies. After gaining the ability to recite Quran, I proceeded to a Quran memorization institute now “Munbahu Tahfidhul Quran wa Dirasatul Islamiyyah’’ where I was taught tajweed (rules governing pronunciation during recitation of the Quran) and the memorization of the Quran proper. The western schools I attended were carefully selected. This brought about a balanced personality; the acquisition of western education did not make me forget the purpose of my existence which is the worship of Allah.</p>
                                <p className="biography-text">Sometimes in 2007, I discovered my weak points in the area of mathematics and other calculative subjects, I then decided to choose arts and social science line and the only course of study I could think of is law. The dream to study law was actualized in 2011 when I was offered an admission to study Common and Islamic Law at the prestigious University of Ilorin, Ilorin, Nigeria. I graduated in 2016 and proceeded to the Nigerian Law School as the last step to becoming a legal practitioner in Nigeria. The program was a success but my dream of becoming a lawyer was stalled in December 2017 during the rounding up ceremony (call to bar). I was denied call to the Nigerian bar because I adorned myself with hijab (Muslim women head covering) and refused to remove it despite all threats and persuasion. This was against the norm, as fellow female Muslims  have always been forced to remove it before gaining entrance into the hall and have been victimized in different court of law by judges who warned them never to appear like that in their courts again. The mere refusal to remove the hijab which led to my denial of call to bar liberated all Muslim female aspirants to the bar and lawyers who desire to use the hijab as I was eventually called to the Nigerian bar in July, 2018 with my hijab by the will of Allah.</p>
                                <p className="biography-text">The above incident called for the need to develop myself more in the International Human Rights Law and the need to continue to sensitize fellow Muslims, particularly female Muslim about their rights and reorient them about the religion. To achieve this, I have decided to continue to develop myself intellectually, morally and spiritually. I hope and pray this platform would be beneficial to anyone who yearn for knowledge like me.</p>
                            </div>
                            <div className={`about-content-wrapper ${ activeAboutItem === 'education' ? 'active' : ''}`}>
                                <h3 className="biography-heading">Education</h3>
                                <p className="biography-text">I got my Primary school leaving certificate from Al-irshaad Nursery and Primary School in 2004. I proceeded to Islamic College Ilorin from 2004 – 2010. I got a diploma in Computer Science from Kwara State Ministry of Education and Human Capital Development, School of Computer Technology in 2011.</p>
                                <p className="biography-text">I also bagged  Degree in Common and Islamic Law from University of Ilorin, Ilorin, Nigeria in 2016 and lastly I obtained my BL (Barrister-at-Law) Certificate from the Nigerian Law School, Bwari, Abuja in 2017. After one year Compulsory National Service, I applied to the International Islamic University Malaysia (IIUM) for a Masters Programme in Comparative Law.</p>
                            </div>
                            <div className={`about-content-wrapper ${ activeAboutItem === 'awards' ? 'active' : ''}`}>
                                <h3 className="biography-heading">Awards</h3>
                                <p className="biography-text">Won the following awards:</p>
                                <ul>
                                    <li>Award of First Among Equals by Chaste Intellect International School, Ilorin February, 2018</li>
                                    <li>Award of Recognition by Coalition of Nigerian Muslim Women Organisations February, 2018</li>
                                    <li>Award by Nigerian Association of Muslim Law students (NAMLAS), National	August, 2018</li>
                                    <li>Lady of Honour Award by the Federation of Muslim Women’s Association of Nigeria (FOMWAN) September, 2018</li>
                                    <li>Lady of Honour Award by the Federation of Muslim Women’s Association of Nigeria (FOMWAN) September, 2018</li>
                                    <li>Award of Excellence by National Council of Muslim Youth Organisations (NACOMYO) September, 2018</li>
                                    <li>Award of Honour by the Muslim Corpers’ Association of Nigeria (MCAN) September, 2018</li>
                                    <li>Award of Recognition by the Muslim Congress (TMC)	September, 2018</li>
                                </ul>
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
                                        id='awards'
                                        onClick={this.toggleAboutItem}
                                        className={`link-name ${ activeAboutItem === 'awards' ? 'active' : ''}`}>
                                        Awards
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
                                    <BlogPeekTabContent post={post} key={`${key}${post.id}`} postImage={post.thumbnailUrl ||lawBook}/>
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
