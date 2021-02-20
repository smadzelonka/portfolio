import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";
import BasePage from "../../components/BasePage";

// class based component
const Portfolio = ({ portfolio }) => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am a portfolio page {portfolio.title}</h1>
        <p>Body: {portfolio.body}</p>
        <p>Id: {portfolio.id}</p>
      </BasePage>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`,
    );
    // data for axios // json() for fetch
    post = await res.data;
  } catch (error) {
    console.error(error);
  }
  return { portfolio: post };
};

export default withRouter(Portfolio);
