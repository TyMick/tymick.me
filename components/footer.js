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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
} from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";

const Footer = () => (
  <Container as="footer" fluid className="text-center mt-auto mb-3">
    <a
      rel="license"
      href="http://creativecommons.org/licenses/by/4.0/"
      title="Creative Commons Attribution 4.0 International License"
      className="text-reset text-decoration-none"
      style={{ fontSize: "1rem" }}
    >
      <FontAwesomeIcon icon={faCreativeCommons} />
      &#x0200A;
      <FontAwesomeIcon icon={faCreativeCommonsBy} />
    </a>{" "}
    {new Date().getFullYear()}{" "}
    <a
      {...{ "xmlns:cc": "http://creativecommons.org/ns#" }}
      href="https://tymick.me"
      property="cc:attributionName"
      rel="cc:attributionURL"
      className="text-reset text-decoration-none"
    >
      Tyler Westin Mick
    </a>
  </Container>
);

export default Footer;
