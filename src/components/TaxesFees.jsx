import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class TaxesFees extends Component {
  render() {
    const { taxes } = this.props;
    return (
      <Row className="show-grid">
        <Col md={6}>Estimated taxes & fees (based on 94015)</Col>
        <Col md={6}>{`$${taxes}`}</Col>
      </Row>
    );
  }
}
