import React from 'react';
import {
        InputGroup,
        InputGroupAddon,
        Form,
        FormGroup,
        Input,
        Button,
        Container,
        Row,
        Col
    } from 'reactstrap';
import hijabFooter from '../../../assets/hijabPink.svg';
import facebookSVG from '../../../assets/social/facebook.svg';
import twitterSVG from '../../../assets/social/twitter.svg';
import instagramSVG from '../../../assets/social/instagram.svg';
import './Footer.scss';


const Footer = props => {
    return (
        <footer className="Footer">
            <Container className="footer-container">
                <Row>
                    <Col md="3" className="main">
                        <span className="brand-logo">Firdaus</span>
                        <p className="titles">Muslimah | Barrister | Writer</p>
                        <p className="contacts">
                            <span>me@firdausamasa.com</span>
                            <span>Jannahfir@gmail.com</span>
                            <span>amasafirdausa@gmail.com</span>
                        </p>
                    </Col>
                    <Col md="3">
                        <h4 className="column-heading"><span>Links</span></h4>
                        <ul className="links">
                            <li className="link"><a href="#blog">Blog</a></li>
                            <li className="link"><a href="#blog">Contact</a></li>
                            <li className="link"><a href="#blog">Blog</a></li>
                            <li className="link"><a href="#blog">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md="3" className="subscribe">
                        <p>Don&rsquo;t miss out on my latest updates <span role="img" aria-label="smile">😊</span></p>
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <Input placeholder="email" type="email" className="subscribe-input" required />
                                    <InputGroupAddon addonType="append"><Button className="subscribe-btn" type="submit">Subscribe</Button></InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                        <ul className="socials">
                            <li><a><img src={facebookSVG} alt="" /></a></li>
                            <li><a><img src={instagramSVG} alt="" /></a></li>
                            <li><a><img src={twitterSVG} alt="" /></a></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <img src={hijabFooter} alt="hijab" className="hijab" />
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright">
                All Rights reserved &copy;Firdaus Amasa { new Date().getFullYear()}
                <span className="by">Designed by <a target="_blank" rel="noopener noreferrer nofollow" href="https://twitter.com/jattorize">Jatto</a> &amp; <a target="_blank" rel="noopener noreferrer nofollow" href="https://codementor.io/jalasem">Jalasem</a></span>
            </div>
        </footer>
    );
}

export default Footer;