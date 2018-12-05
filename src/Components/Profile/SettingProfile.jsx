import React, { Component } from 'react';
import Profile from './About/Profile'
import LeftHomePage from './LeftProfile/LeftHomePage'
import {Col, Row} from "react-bootstrap"
import TopHomePage from './TopProfile/TopHomePage'
class SettingPage extends Component {
  render() {
    return (
        <div>
            <div class="container bootstrap snippets">
                <Row>
                <LeftHomePage/>
                    <Col lg = {9} md = {9} sm = {8}>
                    <TopHomePage/>
                    <div class="divider"></div>
                    <Profile/>
                    </Col>
                </Row>
                <br/>
                <div class="divider"></div>
            </div>
        </div>
    );
  }
}

export default SettingPage
