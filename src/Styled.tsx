import React from "react";

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const Styled = (props) => (
  <>
    <div>
      <Button
        onClick={() => {
          alert("normal clicked");
        }}
      >
        normal
      </Button>
    </div>
    <div>
      <button
        onClick={() => {
          alert("g clicked");
        }}
      >
        g
      </button>
    </div>
    <div>
      <Button
        primary
        onClick={() => {
          alert("primary clicked");
        }}
      >
        primary
      </Button>
    </div>
  </>
);

export default Styled;
