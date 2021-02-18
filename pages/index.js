import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Button, Container } from "semantic-ui-react";

const Index = () => {
  return (
    <BaseLayout>
      <Container>
        <h2>this is the index page</h2>
        <Button>Click Here</Button>
      </Container>
    </BaseLayout>
  );
};

export default Index;
