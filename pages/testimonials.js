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
