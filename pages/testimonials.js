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
import Head from "next/head";
import { Container } from "react-bootstrap";
import Testimonial from "../components/testimonial";

const Testimonials = () => (
  <>
    <Head>
      <title>Testimonials – Ty Mick</title>
    </Head>

    <Container className="cap-width-lg mb-n5">
      <h1 className="mb-4 mb-md-5">Testimonials</h1>

      <Testimonial source="[Nick Massie](https://www.linkedin.com/in/massienick/), Founder & President of Beyond Social, [on Upwork](https://www.upwork.com/o/profiles/users/~01e11c1caf833675be/)">
        Tyler was a joy to work with. He suggested beneficial enhancements to
        our project that otherwise would not have been considered. Even more
        than his great programming skill, Tyler is an even better communicator.
        All deadlines were completed ahead of schedule and feedback was provided
        every step of the way. We intend on rehiring Tyler again in the near
        future. (if he isn't too busy!!)
      </Testimonial>
    </Container>
  </>
);

export default Testimonials;
