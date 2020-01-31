"use strict";

import React, { useState } from "react";
import { Form, InputGroup, Card } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default ({ algorithm, argumentName, inputType }) => {
  const [argValue, setArgValue] = useState(null);

  return (
    <div className="mx-2 mx-sm-5 mb-3">
      <Form inline className="mb-3">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="functionName">
              {algorithm.name}({inputType === "text" && argValue && '"'}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type={inputType}
            placeholder={argumentName}
            aria-label={argumentName}
            aria-describedby="functionName"
            onChange={e => {
              setArgValue(e.target.value);
            }}
          />
          <InputGroup.Append>
            <InputGroup.Text>
              {inputType === "text" && argValue && '"'})
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </Form>

      <div className="d-flex align-items-center">
        <h5 className="mb-0 mr-3">Returns:</h5>
        <Card className="h5 mb-0">
          {argValue ? (
            <SyntaxHighlighter
              language="javascript"
              style={githubGist}
              className="px-2 py-1 m-0"
            >
              {typeof algorithm(argValue) === "string"
                ? '"' + algorithm(argValue) + '"'
                : algorithm(argValue).toString()}
            </SyntaxHighlighter>
          ) : (
            <pre className="px-2 py-1 m-0">&nbsp;</pre>
          )}
        </Card>
      </div>
    </div>
  );
};
