import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import firdauz from '../../assets/firdauz.jpg';
import hijab from '../../assets/hijab.svg';
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
                                <li><span className="link-number">01</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">02</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">03</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">04</span><span className="link-name">Biography</span></li>
                                <li><span className="link-number">05</span><span className="link-name">Biography</span></li>
                            </ul>
                        </Col>
                        <p className="section-info">ABOUT ME</p>
                    </Row>
                </section>
                <section>
                    3rd section - blog peek section (row)
                    <div>
                        col 12
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
    fetchBlogPeek
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
