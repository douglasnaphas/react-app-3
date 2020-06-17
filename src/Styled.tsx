import React from "react";

import styled from "styled-components";

const Button = styled.button``;

const Styled = (props) => (
  <>
    <div>
      <Button {...props}>f</Button>
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
  </>
);

export default Styled;
