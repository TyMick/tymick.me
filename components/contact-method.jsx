import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ id, brand, icon, href, children }) => (
  <Row id={id || brand} as="li" noGutters className="p-2 p-md-3">
    <Col xs="auto" className="mr-2 mr-md-3">
      <a href={href} className={brand ? brand + "-link" : "text-secondary"}>
        <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
      </a>
    </Col>
    <Col style={{ paddingTop: "0.35rem" }}>{children}</Col>
  </Row>
);
