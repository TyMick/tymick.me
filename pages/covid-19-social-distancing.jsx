"use strict";

import React from "react";
import Head from "next/head";
import { Container, Figure, Row, Col, Image } from "react-bootstrap";

export default () => (
  <>
    {/* prettier-ignore */}
    <Head>
      <title>COVID-19 social distancing will probably last longer than you think – Ty Mick</title>
      <meta property="og:title" content="COVID-19 social distancing will probably last longer than you think – Ty Mick" />
      <meta property="og:description" content="And what isolation means for nomads." />
      <meta property="og:image" content="https://tymick.me/outbreak-scenarios-july.png" />
      <meta property="og:url" content="https://tymick.me/covid-19-social-distancing" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Ty Mick" />
      <meta name="twitter:image:alt" content="Three scenarios for how the outbreak could spread." />
      <meta name="twitter:site" content="@tywmick" />
    </Head>

    <Container
      as="article"
      aria-labelledby="article-title"
      className="serif cap-width-lg"
    >
      <h1 id="article-title">
        COVID-19 social distancing will probably last longer than you think
      </h1>

      <h2 className="h3 text-secondary">And what isolation means for nomads</h2>

      <div className="font-italic text-secondary sans-serif mb-4">
        March 26, 2020
      </div>

      <p>
        My goodness gracious, this coronavirus epidemic keeps looking worse
        every single day. From what I&rsquo;m reading lately, it now looks like
        the need for social distancing is going to extend for several more
        months, not just several more weeks. Most frightening, look at these
        maps of{" "}
        <a href="https://www.nytimes.com/interactive/2020/03/20/us/coronavirus-model-us-outbreak.html">
          projected infection rates
        </a>{" "}
        in the United States by July 1 based on three different scenarios:
      </p>

      <Figure className="full-width mt-2 mb-4">
        <Figure.Image
          src="/outbreak-scenarios-july.png"
          fluid
          className="d-block mx-auto"
        />
        <Figure.Caption className="sans-serif text-center">
          Source:{" "}
          <a
            href="https://www.nytimes.com/interactive/2020/03/20/us/coronavirus-model-us-outbreak.html"
            title="Coronavirus Could Overwhelm U.S. Without Urgent Action, Estimates Say"
            className="text-secondary"
          >
            <cite>The New York Times</cite>
          </a>
        </Figure.Caption>
      </Figure>

      <p>
        In the interactive map farther down in the article, move the timeline
        just a month later to August 1 and it looks even worse:
      </p>

      <Figure className="full-width mt-2 mb-4">
        <Row className="figure-img">
          <Col>
            <Image src="/outbreak-scenario-1-august.png" fluid />
          </Col>
          <Col>
            <Image src="/outbreak-scenario-2-august.png" fluid />
          </Col>
          <Col>
            <Image src="/outbreak-scenario-3-august.png" fluid />
          </Col>
        </Row>
        <Figure.Caption className="sans-serif text-center">
          Source:{" "}
          <a
            href="https://www.nytimes.com/interactive/2020/03/20/us/coronavirus-model-us-outbreak.html"
            title="Coronavirus Could Overwhelm U.S. Without Urgent Action, Estimates Say"
            className="text-secondary"
          >
            <cite>The New York Times</cite>
          </a>
        </Figure.Caption>
      </Figure>

      <p>
        The article does say that the &ldquo;No control measures&rdquo; scenario
        is unlikely, since people and governments are already at least doing{" "}
        <em>something</em>, but here&rsquo;s how it describes #2 and #3:
        &ldquo;A second scenario envisions what would happen with some control
        measures, such as partial adherance to social distancing guidlines and a
        patchwork of government-imposed restrictions on work, travel, and dining
        out. A third envisions severe control measures: strict adherance across
        the country to social distancing, working remotely, closing schools and
        restaurants and banning large gatherings.&rdquo;
      </p>
      <p>
        #2 sounds like the current situation in this country, and those maps by
        July and August look <em>awful</em>. I <em>really</em> hope the country
        as a whole moves to more severe control measures so our infection map
        ends up looks more like #3. But it&rsquo;s going to be tougher to compel
        people to stay home here in a Western society where the importance of
        the individual is praised above the importance of the group, as opposed
        to the more naturally group-oriented thinking of East Asian societies.
      </p>
      <p>
        But regardless of the infection rate, how long are we going to have to
        isolate ourselves? China&rsquo;s infection rate started decreasing after
        two months, but they&rsquo;re still having to use a lot of restrictions
        to keep the virus at bay. Scientists also don&rsquo;t know for sure yet
        whether surviving a COVID-19 infection makes you immune.{" "}
        <cite>The Washington Post</cite> sums up{" "}
        <a href="https://www.washingtonpost.com/health/2020/03/16/social-distancing-coronavirus/">
          the potential timeline
        </a>{" "}
        pretty well: &ldquo;So it&rsquo;s possible, even most likely, that after
        U.S. cases peak, Americans will still have to maintain some measures —
        such as isolating the infected, constant hand-washing, some degree of
        social distancing — until a viable vaccine is developed, which could
        take 12 to 18 months.&rdquo;
      </p>
      <p>
        Some experts think that{" "}
        <a href="https://www.cbsnews.com/news/coronavirus-infection-outbreak-worldwide-virus-expert-warning-today-2020-03-02/">
          40&ndash;70% of the world&rsquo;s population
        </a>{" "}
        will eventually be infected.
      </p>

      <hr className="border-secondary my-4" style={{ width: "5rem" }} />

      <p>
        So what does that mean for Corrie and me as full-time nomads? We live in
        an RV and have no stationary home to go back to. We&rsquo;d already
        decided on March 17 that we needed to hole up in a national forest and
        stop visiting beaches and national parks, but when staying on public
        lands, we have to move every 2 weeks. We&rsquo;re hearing from the nomad
        community on social media that governments are closing off a lot of
        public lands now, but even if we could continue to find some places to
        live here and there, after reading about the{" "}
        <a href="https://www.nytimes.com/2020/03/22/health/coronavirus-restrictions-us.html">
          harsh steps required to stop this virus
        </a>
        , I&rsquo;m convinced that such slow but constant movement would be
        irresponsible. In the small but existing chance that we do get the virus
        (we still need to go into town for groceries and water) we could take it
        with us to a new city that wouldn&rsquo;t have had it otherwise.
      </p>
      <p>
        So we need to hunker down in one place for a while. Campgrounds are
        closing everywhere. A lot of RV parks likely are as well, and besides,
        RV parks are pretty expensive long-term. And we can&rsquo;t rent an
        apartment somewhere right now not knowing the timeline of how long
        we&rsquo;ll have to be there.
      </p>
      <p>
        That brings us to staying with friends and family. Looking at the data
        on{" "}
        <a href="https://www.vox.com/2020/3/23/21190033/coronavirus-covid-19-deaths-by-age">
          COVID-19 risks for different age groups
        </a>
        , it appears that fatality risk rises pretty consistently as age
        increases, so we don&rsquo;t feel comfortable staying with people our
        parents&rsquo; age or older.
      </p>

      <Figure className="full-width mt-2 mb-4">
        <Figure.Image
          src="https://pbs.twimg.com/media/ETuMzdBWAAgzf-T?format=jpg&name=medium"
          rounded
          fluid
          className="border d-block mx-auto"
        />
        <Figure.Caption className="sans-serif text-center">
          Source:{" "}
          <a
            href="https://twitter.com/AndyBiotech/status/1241741127205572609"
            title="Andy Biotech on Twitter"
            className="text-secondary"
          >
            Andy Biotech
          </a>
        </Figure.Caption>
      </Figure>

      <p>
        We ended up deciding three days ago to take up an offer to stay with
        some good friends of ours who are also in their late twenties. They also
        live in a more rural area, and we&rsquo;d rather add the (small) burden
        of our presence in a community to as few people as possible.
      </p>
      <p>
        These friends also have small children in the home, but amazingly, so
        far not a single child under the age of 10 has died from COVID-19 in the
        entire world. Surprising, since kids are usually more vulnerable to the
        flu, but quite a relief.
      </p>
      <p>
        Finally, to make absolutely sure we don&rsquo;t pass along an infection
        unknowingly caught at a gas station or auto mechanic along the way
        despite our best efforts, Corrie and I are going to remain isolated in
        our RV for our first two weeks at our fiends&rsquo; house, because
        symptoms can take{" "}
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
          up to 14 days
        </a>{" "}
        to appear after exposure to this coronavirus. After that point, we can
        be confident that our risk profile is identical to that of our friends,
        since it won&rsquo;t make a difference which member of the household
        does the grocery runs.
      </p>

      <hr className="border-secondary my-4" style={{ width: "5rem" }} />

      <p>
        Speaking of groceries, this article on{" "}
        <a href="https://slate.com/human-interest/2020/03/coronavirus-grocery-shopping-best-practices-explained.html">
          grocery shopping safely during a pandemic
        </a>{" "}
        answered several concerns that have popped into my head over the past
        few days. Do I need to clean the outside of cans and boxes before
        putting them onto my pantry shelves? According to the experts, probably
        not.
      </p>
      <p>
        Also, here&rsquo;s a reminder of{" "}
        <a href="https://www.unicef.org/coronavirus/everything-you-need-know-about-washing-your-hands-protect-against-coronavirus-covid-19">
          all the times you need to wash your hands
        </a>
        , which is a lot more often than my instincts tell me to. I plan on
        making signs to post around the house to remind me. And this 6-year-old
        taught me{" "}
        <a href="https://www.instagram.com/tv/B9p5SQNF4cl/?igshid=ru10e9kt8ubi">
          <em>how</em> to wash my hands properly
        </a>{" "}
        for the first time in my life.
      </p>
      <p>
        Stay safe, friends, and please stay home if you can. If you cannot,
        thank you for your sacrifice to keep the essentials running for
        everyone, and know that your safety is one of the reasons that I am
        staying home myself.
      </p>
    </Container>
  </>
);
