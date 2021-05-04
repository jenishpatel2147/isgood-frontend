import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiMenu, mdiDotsGrid } from "@mdi/js";

export default function OrganisationsLayout() {
  return (
    <Container>
      <Row>
        <Col className=" col-6 mt-3">
          <input placeholder="Filter (future release)" disabled />
        </Col>
        <Col className=" col-6 mt-3 d-flex justify-content-end">
          <Icon path={mdiMenu} size={1.3} className="p-1" />
          <Icon path={mdiDotsGrid} size={1.3} className="p-1" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center py-5">
        {[...Array(6)].map((element, index) => (
          <Col
            key={index}
            md={2}
            sm={3}
            xs={5}
            className="card d-flex justify-content-center p-1 m-2"
          >
            <img src="https://placeimg.com/540/540/any" />
            <h4 className="text-center">Org Name</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
