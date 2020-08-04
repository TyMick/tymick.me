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
import React, { useState } from "react";
import { Form, InputGroup, Card } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const AlgorithmTest = ({ algorithm, argumentName, inputType }) => {
  const [argValue, setArgValue] = useState(null);

  return (
    <div className="mx-2 mx-sm-5 mb-3">
      <Form inline className="mb-3 text-monospace">
        <InputGroup className="w-100">
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
            onChange={(e) => {
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

export default AlgorithmTest;
