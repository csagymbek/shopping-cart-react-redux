import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class Subtotal extends Component {
  render() {
    const { price } = this.props;
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${price}`}</Col>
      </Row>
    );
  }
}
