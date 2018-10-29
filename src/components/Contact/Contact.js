import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Contact.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import facebookSVG from '../../assets/social/facebook.svg';
import twitterSVG from '../../assets/social/twitter.svg';
import instagramSVG from '../../assets/social/instagram.svg';
import expressMail from '../../assets/message1.svg';
import sendIcon from '../../assets/paper-plane.svg';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col
} from 'reactstrap';
import {
    subscribeUser
  } from '../../actions/contactAction';

class Contact extends Component {
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


    render() {
        const { isNavDropdownOpen, email } = this.state;
        
        return [
            <div key={'contact-content'} className="Contact">
                <header>
                    <Navigation
                        isOpen={isNavDropdownOpen}
                        toggle={this.toggleHamburgerNav}
                    />
                    <div className="header-contents">
                        <h4 className="tag-phrase">Get In Touch</h4>
                        <p className="contact-text">Reach out to me via the contact form, shoot me an email or give me a call</p>
                    </div>
                </header>
                <section className="contact-me-section">
                    <Row>
                        <Col md={{size: 8, offset: 2}}>
                            <div className="card">
                                <div className="contact-form-container">
                                    <Row>
                                        <Col md="12">
                                            <h4 className="contact-form-head">Send Me a Message <span><img src={expressMail} alt="express mail sending"/></span></h4>
                                            <Form row="true">
                                                <Row>
                                                    <Col sm="6">
                                                        <FormGroup>
                                                            <Label for="name">Your Name</Label>
                                                            <Input type="text" id="name" placeholder="e.g James Ada" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6">
                                                        <FormGroup>
                                                            <Label for="email">Email Address</Label>
                                                            <Input type="email" id="email" placeholder="e.g james@gmail.com" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm="6">
                                                        <FormGroup>
                                                            <Label for="phone">Phone Number</Label>
                                                            <Input type="telephone" id="phone" placeholder="e.g 08162740850" />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="6">
                                                        <FormGroup>
                                                            <Label for="company">Your Company</Label>
                                                            <Input type="text" id="company" placeholder="e.g Google Inc" />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm="12" className="message-container">
                                                        <FormGroup>
                                                            <Label for="company">Your Message</Label>
                                                            <Input type="textarea" id="company" placeholder="Hi, It will be our pleasure to..." />
                                                        </FormGroup>
                                                        <Button title="Send" className="send-message" type="submit">
                                                            <img src={sendIcon} alt="send"/>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="contact-info">
                                    <h4>Contact Information</h4>
                                    <p className="contact-detail"><span role="img" aria-label="email">📧</span> Jannahfir@gmail.com</p>
                                    <p className="contact-detail"><span role="img" aria-label="email">📧</span> amasafirdausa@gmail.com</p>
                                    <p className="contact-detail"><span role="img" aria-label="phone">📞</span> (+234) 803-827-9779</p>
                                    <ul className="socials">
                                        <li><a><img src={facebookSVG} alt="facebook" /></a></li>
                                        <li><a><img src={instagramSVG} alt="instagram" /></a></li>
                                        <li><a><img src={twitterSVG} alt="twitter" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>,
            <Footer key={'footer'} email={email} handleSubscribeInput={this.handleSubscribeInput} handleSubscribeSubmit={this.handleSubscribeSubmit}/>
        ];
    }
}

const mapStateToProps = state => {
    return {
        // subscribe actions states
        successPostingSubscriber: state.contactReducer.successPostingSubscriber,
        errorPostingSubscriber: state.contactReducer.errorPostingSubscriber,
        isPostingSubscriber: state.contactReducer.isPostingSubscriber
    }
}

const mapDispatchToProps = {
    subscribeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
