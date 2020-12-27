import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMethod({ id, brand, icon, href, children }) {
  return (
    <Row
      id={id || brand}
      as="li"
      noGutters
      className="px-0 py-2 px-sm-2 p-md-3"
    >
      <Col xs="auto" className="mr-2 mr-md-3">
        <a href={href} className={brand ? brand + "-link" : "text-secondary"}>
          <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
        </a>
      </Col>
      <Col className="pt-1">{children}</Col>
    </Row>
  );
}
