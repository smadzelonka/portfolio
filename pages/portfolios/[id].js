import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

// class based component
class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
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
  }
  render() {
    const { portfolio } = this.props;
    return (
      <BaseLayout>
        {console.log(portfolio)}
        <h1>I am a portfolio page {portfolio.title}</h1>
        <p>Body: {portfolio.body}</p>
        <p>Id: {portfolio.id}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
