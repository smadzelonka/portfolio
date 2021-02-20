import React from "react";
import { Container } from "semantic-ui-react";

const BasePage = (props) => {
  const { className = "", children } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>{children}</Container>
    </div>
  );
};

export default BasePage;
