import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "./Image";

export default function Greeting() {
  return (
    <Row className="align-items-center mb-3 mb-sm-5">
      <Col
        xs={12}
        sm="auto"
        className="mr-md-4 mb-2 mb-sm-0 text-center text-sm-left"
      >
        <Image
          src="/images/profile-pic.jpg"
          dimensions={{ width: 2201, height: 2201 }}
          alt="Ty hiking in Joshua Tree National Park"
          width="100%"
          maxWidth="200px"
          roundedCircle
          priority
        />
      </Col>
      <Col xs={12} sm className="text-center text-sm-left">
        <h1 className="greeting">Hi! I&rsquo;m Ty.</h1>
      </Col>
    </Row>
  );
}
