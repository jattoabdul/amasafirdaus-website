import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { Navigation } from '../Partials/Navigation';
import { Footer } from '../Partials/Footer';
import { Pagination } from '../Partials/Pagination';
import firdauz from '../../assets/firdauz.jpg';
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
                            <h4>Biikjk</h4>
                        </Col>
                        <Col md="6">
                            <div className="my-picture-container">
                                <img src={firdauz} alt="firdaus profile dp"/>
                            </div>
                            - picture & titles col 6 <br/>
                            picture <br/>
                            numbered links - titles
                        </Col>
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
