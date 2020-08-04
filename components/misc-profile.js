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
import { kebabCase } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MiscProfile({ brand, icon, href }) {
  return (
    <div className="p-3 flex-fill position-relative">
      <a
        href={href}
        title={brand}
        className={`${kebabCase(brand.toLowerCase())}-link`}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    </div>
  );
}
