import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopNav from "../../components/TopNav";
import SideNav from "../../components/SideNav";
import OrganisationsLayout from "./OrganisationsLayout";

export default function MyOrganisations() {
  return (
    <div>
      <TopNav />
      <Container>
        <Row>
          <Col className="col-3">
            <SideNav />
          </Col>
          <Col className="col-9">
            <OrganisationsLayout />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
