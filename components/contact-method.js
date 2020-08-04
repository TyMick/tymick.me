/**
 * Copyright 2020 Tyler Westin Mick
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMethod({ id, brand, icon, href, children }) {
  return (
    <Row id={id || brand} as="li" noGutters className="p-2 p-md-3">
      <Col xs="auto" className="mr-2 mr-md-3">
        <a href={href} className={brand ? brand + "-link" : "text-secondary"}>
          <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
        </a>
      </Col>
      <Col className="pt-1">{children}</Col>
    </Row>
  );
}
