import React from "react";
import my from "../assets/img.png";
import { TopNav } from "./TopNav";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <div className="hero">
      <TopNav />

      <Container>
        <Row className="mt-5 py-3">
          <Col md="6" className="text-center order-md-2">
            <img src={my} width="80%" alt="" />
          </Col>
          <Col md="6" className="mt-3 pb-3">
            hi 👋 i'm
            <div className="fs-1 fw-bolder mb-5">Samir Maharjan</div>
            <p>
              I am a IT graduate, recently finished my bachelor's and learning full stack development in dented code.
            </p>
            <Button variant="danger">Download Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
