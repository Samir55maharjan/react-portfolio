import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Skills = () => {
  return (
    <Container id="skills" className=" py-3 mb-5">
      <Row>
        <Col>
          {/* <!-- title --> */}
          <div className="title">
            <span>Skills</span>
          </div>

          {/* <!-- icons --> */}

          <div className="icons">
            <div>
              <i className="fa-brands fa-html5 text-danger"></i> HTML
            </div>
            <div>
              <i className="fa-brands fa-css3-alt text-primary"></i> CSS
            </div>
            <div>
              <i className="fa-brands fa-square-js text-warning"></i> JavaScript
            </div>
            <div>
              <i className="fa-brands fa-figma text-info"></i> Figma
            </div>
            <div>
            <i class="fa-brands fa-bootstrap text-primary"></i> Bootstrap
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
