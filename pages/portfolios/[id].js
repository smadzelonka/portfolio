import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetPostById } from "@/actions";
import { Message, Dimmer, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

// class based component
const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id);
  return (
    <BaseLayout>
      <BasePage>
        {loading && (
          <Dimmer active>
            <Loader indeterminate>Loading...</Loader>
          </Dimmer>
        )}
        {portfolio && (
          <>
            <h1>I am a portfolio page {portfolio.title}</h1>
            <p>Body: {portfolio.body}</p>
            <p>Id: {portfolio.id}</p>
          </>
        )}
        {error && (
          <Message warning color="red">
            {error.message}
          </Message>
        )}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
