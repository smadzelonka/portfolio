import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";

const Cv = () => {
  const { data, error, loading } = useGetUser();

  return (
    <BaseLayout user={data} error={error} loading={loading}>
      <BasePage>
        <h2>this is the index page</h2>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
