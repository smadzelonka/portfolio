import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // data for axios // json() for fetch
    posts = await res.data;
  } catch (error) {
    console.error(error);
  }
  return { props: { posts: posts.slice(0, 10) } };
}

function RenderPosts(posts) {
  return posts.map((post) => (
    <li key={post.id}>
      <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
        <a>{post.title}</a>
      </Link>
    </li>
  ));
}

const Portfolios = ({ posts }) => {
  return (
    <BaseLayout>
      <h2>this is the Portfolio page</h2>
      <ul>{RenderPosts(posts)}</ul>
    </BaseLayout>
  );
};

export default Portfolios;
