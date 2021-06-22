import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, NavLink } from 'reactstrap'
import './Header.scss'
Header.propTypes = {

};

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-contain-between">
                    <Col xs="auto">
                        <a href="#">
                            PHOTO APP
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink>

                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;