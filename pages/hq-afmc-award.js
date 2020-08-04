import React from "react";
import Head from "next/head";
import { Container, Image } from "react-bootstrap";
import useBreakpoints from "use-window-width-breakpoints";
import clsx from "clsx";
import award from "../images/2014-afmc-annual-excellence-awards.jpg?sizes[]=358&sizes[]=716&sizes[]=1431&sizes[]=2147&sizes[]=2863";

export default function Award() {
  const breakpoint = useBreakpoints();

  return (
    <>
      <Head>
        <title>Ty Mick, 2014 HQ AFMC Category I Civilian of the Year</title>
      </Head>

      <Container className="cap-width-lg">
        <h1>2014 HQ AFMC Category I Civilian of the Year</h1>

        <div
          id="image-wrapper"
          className={clsx("mb-3 mx-md-n3", breakpoint.down.sm && "full-width")}
        >
          <Image
            srcSet={award.srcSet}
            src={award.src}
            sizes="(min-width: 992px) 962px, (min-width: 768px) 722px, 100vw"
            alt="Ty Mick, wearing a medal featuring the AFMC logo, walking on a red carpet between Airmen holding swords at the 2014 AFMC Annual Excellents Awards."
            fluid
          />
        </div>

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
};
