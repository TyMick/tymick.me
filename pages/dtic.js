import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import EssayPreview from "../components/EssayPreview";

export default function Dtic() {
  return (
    <>
      <Head>
        <title>Defense Technical Information Center – Ty Mick</title>
      </Head>

      <Container className="cap-width-lg">
        <h1>Papers by Ty Mick in the Defense Technical Information Center</h1>

        <p className="lead text-muted mb-5">
          Collected here since DTIC&rsquo;s website has no author pages.
        </p>

        <ul className="list-unstyled">
          <EssayPreview
            title="The Case for AFMC Social Media Analysis"
            href="https://apps.dtic.mil/sti/citations/AD1012101"
            date="November 18, 2015"
          >
            AFMC Public Affairs is charged with the task of &ldquo;telling the
            story of equipping the Air Force for world-dominant airpower.&rdquo;
            AFMC is unique amongst the rest of the Air Force, given its support
            role, emphasis on science and technology, greater proportion of
            civilian employees, and other factors, making this a distinct story
            worth telling.
          </EssayPreview>

          <EssayPreview
            title="An Evaluation of milSuite for A9 and the AFMC Analysis Community"
            href="https://apps.dtic.mil/sti/citations/AD1012055"
            date="January 9, 2015"
          >
            milSuite is a collection of online social business applications
            developed for the DoD by MilTech Solutions, a Forward Operating
            Agency of the Army’s Program Executive Office for Command, Control
            and Communications-Tactical (PEO C3T). It is comprised of four
            active sites: milBook, milWiki, milWire, and milTube. All four
            operate under secure CAC authentication and thus can facilitate up
            to UNCLASSIFIED//FOUO content.
          </EssayPreview>

          <EssayPreview
            title="Readiness Based Sparing: A Research Summary"
            href="https://apps.dtic.mil/sti/citations/AD1012051"
            date="July 13, 2012"
          >
            We believe that Readiness Based Sparing (RBS) is the superior method
            of sparing, far more efficient, cost-effective, and comprehensive
            than its predecessors, and that it should be utilized across the
            U.S. Department of Defense. Unfortunately, Department of Defense and
            Air Force policy is currently rather ambiguous concerning its use,
            and we plan to make a case to those individuals involved in
            policy-making to update the wording of such policy to more plainly
            mandate the use of RBS methods. In the interest of more thoroughly
            investigating this belief and, if it is confirmed, building a body
            of supporting evidence, we performed a measure of scholarly research
            on the topic.
          </EssayPreview>
        </ul>
      </Container>
    </>
  );
}
