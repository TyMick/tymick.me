"use strict";

import React, { useState } from "react";
import Head from "next/head";
import Gist from "react-gist";
import { Container, Form, InputGroup, Button, Card } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default () => {
  function checkCashRegister(price, cash, cid) {
    let changeLeft = cash - price;
    let drawerTotal = cid.reduce(function(acc, cur) {
      return acc + cur[1];
    }, 0);

    if (changeLeft == drawerTotal) {
      return { status: "CLOSED", change: cid };
    } else {
      let changeUnits = [];

      function processUnit(name, amt) {
        let unitTotal = cid.filter(item => item[0] == name)[0][1];
        let unitChange = Math.min(
          unitTotal,
          Math.floor(changeLeft / amt) * amt
        );
        unitChange = Math.round(unitChange * 100) / 100;
        if (unitChange > 0) {
          changeUnits.push([name, unitChange]);
          changeLeft -= unitChange;
          changeLeft = Math.round(changeLeft * 100) / 100; //fixes flooring issues
        }
      }
      processUnit("ONE HUNDRED", 100);
      processUnit("TWENTY", 20);
      processUnit("TEN", 10);
      processUnit("FIVE", 5);
      processUnit("ONE", 1);
      processUnit("QUARTER", 0.25);
      processUnit("DIME", 0.1);
      processUnit("NICKEL", 0.05);
      processUnit("PENNY", 0.01);

      if (changeLeft == 0) {
        return { status: "OPEN", change: changeUnits };
      } else {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
    }
  }

  const [price, setPrice] = useState(0);
  const [cash, setCash] = useState(0);
  const [penny, setPenny] = useState(0);
  const [nickel, setNickel] = useState(0);
  const [dime, setDime] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [dollar, setDollar] = useState(0);
  const [five, setFive] = useState(0);
  const [ten, setTen] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [functionCall, setFunctionCall] = useState(null);
  const [functionReturn, setFunctionReturn] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    setFunctionCall(
      "checkCashRegister(" +
        price +
        ", " +
        cash +
        ', [["PENNY", ' +
        penny +
        '], ["NICKEL", ' +
        nickel +
        '], ["DIME", ' +
        dime +
        '], ["QUARTER", ' +
        quarter +
        '], ["DOLLAR", ' +
        dollar +
        '], ["FIVE", ' +
        five +
        '], ["TEN", ' +
        ten +
        '], ["TWENTY", ' +
        twenty +
        '], ["ONE HUNDRED", ' +
        hundred +
        "]])"
    );
    setFunctionReturn(
      JSON.stringify(
        checkCashRegister(price, cash, [
          ["PENNY", penny],
          ["NICKEL", nickel],
          ["DIME", dime],
          ["QUARTER", quarter],
          ["DOLLAR", dollar],
          ["FIVE", dollar],
          ["TEN", ten],
          ["TWENTY", twenty],
          ["ONE HUNDRED", hundred]
        ])
      )
    );
  };

  return (
    <>
      <Head>
        <title>Cash register – Ty Mick</title>
      </Head>

      <Container>
        <h1 className="mb-4">Cash register function</h1>

        {/* Input form */}
        <Form className="mb-4" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group controlId="price" className="col-sm">
              <Form.Label className="lead">
                Purchase price (<code>price</code>)
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsPrice">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0"
                  value={price}
                  onChange={e => {
                    setPrice(e.target.value);
                  }}
                  aria-describedby="dsPrice"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="cash" className="col-sm">
              <Form.Label className="lead">
                Payment amount (<code>cash</code>)
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsCash">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0"
                  value={cash}
                  onChange={e => {
                    setCash(e.target.value);
                  }}
                  aria-describedby="dsCash"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <div id="cid" className="col lead">
              Cash in drawer (<code>cid</code>)
            </div>
          </Form.Row>

          <Form.Row>
            <Form.Group
              controlId="penny"
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Form.Label>Value in pennies</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsPenny">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0"
                  value={penny}
                  onChange={e => {
                    setPenny(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsPenny"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              controlId="nickel"
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Form.Label>Value in nickels</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsNickel">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.05"
                  min="0"
                  value={nickel}
                  onChange={e => {
                    setNickel(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsNickel"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="dime" className="col-sm-6 col-md-4 col-lg-3">
              <Form.Label>Value in dimes</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsDime">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.1"
                  min="0"
                  value={dime}
                  onChange={e => {
                    setDime(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsDime"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              controlId="quarter"
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Form.Label>Value in quarters</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsQuarter">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="0.25"
                  min="0"
                  value={quarter}
                  onChange={e => {
                    setQuarter(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsQuarter"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              controlId="dollar"
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Form.Label>Value in one-dollar bills</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsDollar">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="1"
                  min="0"
                  value={dollar}
                  onChange={e => {
                    setDollar(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsDollar"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="five" className="col-sm-6 col-md-4 col-lg-3">
              <Form.Label>Value in five-dollar bills</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsFive">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="5"
                  min="0"
                  value={five}
                  onChange={e => {
                    setFive(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsFive"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="ten" className="col-sm-6 col-md-4 col-lg-3">
              <Form.Label>Value in ten-dollar bills</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsTen">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="10"
                  min="0"
                  value={ten}
                  onChange={e => {
                    setTen(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsTen"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              controlId="twenty"
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Form.Label>Value in twenty-dollar bills</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsTwenty">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="20"
                  min="0"
                  value={twenty}
                  onChange={e => {
                    setTwenty(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsTwenty"
                  required
                />
              </InputGroup>
            </Form.Group>

            <Form.Group
              controlId="hundred"
              className="col-sm-6 col-md-4 col-lg-3"
            >
              <Form.Label>Value in hundred-dollar bills</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="dsHundred">$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="number"
                  step="100"
                  min="0"
                  value={hundred}
                  onChange={e => {
                    setHundred(e.target.value);
                  }}
                  aria-labelledby="cid"
                  aria-describedby="dsHundred"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Check the cash register
          </Button>
        </Form>

        {/* Function call and return */}
        <div className="mx-2 mx-sm-4 mx-lg-5 mb-4">
          <div className="d-flex align-items-center mb-3">
            <h5 className="mb-0 mr-3">Function&nbsp;call:</h5>
            <Card className="mb-0">
              {functionCall ? (
                <SyntaxHighlighter
                  language="javascript"
                  style={githubGist}
                  className="text-wrap px-2 py-1 m-0"
                >
                  {functionCall}
                </SyntaxHighlighter>
              ) : (
                <pre className="px-2 py-1 m-0">&nbsp;</pre>
              )}
            </Card>
          </div>

          <div className="d-flex align-items-center">
            <h5 className="mb-0 mr-3">Returns:</h5>
            <Card className="mb-0">
              {functionReturn ? (
                <SyntaxHighlighter
                  language="json"
                  style={githubGist}
                  className="text-wrap px-2 py-1 m-0"
                >
                  {functionReturn}
                </SyntaxHighlighter>
              ) : (
                <pre className="px-2 py-1 m-0">&nbsp;</pre>
              )}
            </Card>
          </div>
        </div>

        {/* GitHub Gist */}
        <div className="mb-2">
          <Gist id="24cdeb02eb5f4e3e2cd14f91f5bbe5cb" />
        </div>

        {/* Explanation */}
        <p>
          I created this function as a requirement for{" "}
          <a href="https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures">
            my freeCodeCamp JavaScript Algorithms and Data Structures
            Certification
          </a>
          . Output isn't terribly human-readable, but I suppose cash registers
          don't really speak English, so I guess that's okay. Here are the
          requirements I built to:
        </p>

        <ul>
          <li>
            Design a cash register drawer function{" "}
            <code>checkCashRegister()</code> that accepts purchase price as the
            first argument (<code>price</code>), payment as the second argument
            (<code>cash</code>), and cash-in-drawer (<code>cid</code>) as the
            third argument.
          </li>
          <li>
            <code>cid</code> is a 2D array listing available currency.
          </li>
          <li>
            The <code>checkCashRegister()</code> function should always return
            an object with a <code>status</code> key and a <code>change</code>{" "}
            key.
          </li>
          <li>
            Return{" "}
            <code>&#123;status: "INSUFFICIENT_FUNDS", change: []&#125;</code> if
            cash-in-drawer is less than the change due, or if you cannot return
            the exact change.
          </li>
          <li>
            Return <code>&#123;status: "CLOSED", change: [...]&#125;</code> with
            cash-in-drawer as the value for the key <code>change</code> if it is
            equal to the change due.
          </li>
          <li>
            Otherwise, return{" "}
            <code>&#123;status: "OPEN", change: [...]&#125;</code>, with the
            change due in coins and bills, sorted in highest to lowest order, as
            the value of the <code>change</code> key.
          </li>
        </ul>
      </Container>
    </>
  );
};
