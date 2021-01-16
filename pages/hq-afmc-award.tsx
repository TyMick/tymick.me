import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import useBreakpoints from "use-window-width-breakpoints";
import clsx from "clsx";
import Image from "../components/Image";

export default function HqAfmcAward() {
  const breakpoint = useBreakpoints();

  return (
    <>
      <Head>
        <title>Ty Mick, 2014 HQ AFMC Category I Civilian of the Year</title>
      </Head>

      <Container className="cap-width-lg">
        <h1>2014 HQ AFMC Category I Civilian of the Year</h1>

        <Image
          src="/images/2014-afmc-annual-excellence-awards.jpg"
          dimensions={{ width: 2863, height: 1911 }}
          alt="Ty Mick, wearing a medal featuring the AFMC logo, walking on a red carpet between Airmen holding swords at the 2014 AFMC Annual Excellents Awards."
          className={clsx("mb-3 mx-md-n3", breakpoint.down.sm && "full-width")}
          priority
        />

        <p>
          In my time working in the Studies and Analyses Division of
          Headquarters Air Force Materiel Command, I had the honor of being
          named the 2014 HQ AFMC Category I Civilian of the Year, which gave me
          the opportunity to represent the Headquarters at AFMC's Annual
          Excellence Awards banquet, pictured above.
        </p>
      </Container>
    </>
  );
}
