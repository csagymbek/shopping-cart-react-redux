import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <Media className="itemDetails__media">
                <img
                  width={100}
                  height={100}
                  src="https://www.ikea.com/us/en/images/products/markus-office-chair-vissle-dark-gray__0724714_PE734597_S5.JPG?f=xl"
                  alt="thumbnail"
                />
              </Media>
              <Media.Body className="itemDetails__media">
                <p>
                  Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair,
                  Red
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>
                    <strong>Qty: 1</strong>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
