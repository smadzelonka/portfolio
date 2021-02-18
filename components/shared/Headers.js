import React from "react";
import Link from "next/link";

const Headers = () => {
  return (
    <>
      <Link href="/">
        <a> Home </a>
      </Link>
      <Link href="/about">
        <a> About </a>
      </Link>
      <Link href="/portfolios">
        <a> Portfolio </a>
      </Link>
      <Link href="/blog">
        <a> Blogs </a>
      </Link>
      <Link href="/cv">
        <a> Cv </a>
      </Link>
    </>
  );
};

export default Headers;
