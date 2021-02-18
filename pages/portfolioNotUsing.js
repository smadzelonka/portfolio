import React from "react";
import { useRouter } from "next/router";
import BaseLayout from "../components/layouts/BaseLayout";
const Portfolio = () => {
  const router = useRouter();
  return (
    <BaseLayout>
      <h2>this is the Portfolio page</h2>
    </BaseLayout>
  );
};

export default Portfolio;
