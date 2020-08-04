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
import Link from "next/link";

export default function InternalLink({
  href,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  children,
  ...otherProps
}) {
  return (
    <Link {...{ href, as, prefetch, replace, scroll, shallow }}>
      <a {...otherProps}>{children}</a>
    </Link>
  );
}
