import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import BasePage from "@/components/BasePage";

// export async function getStaticProps() {
//   let posts = [];
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     // data for axios // json() for fetch
//     posts = await res.data;
//   } catch (error) {
//     console.error(error);
//   }
//   return { props: { posts: posts.slice(0, 10) } };
// }

const Portfolios = ({ posts }) => {
  const RenderPosts = (posts) => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h2>this is the Portfolio page</h2>
        <ul>{RenderPosts(posts)}</ul>
      </BasePage>
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // data for axios // json() for fetch
    posts = res.data;
  } catch (error) {
    console.error(error);
  }
  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
