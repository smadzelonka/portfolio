import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { authUser } from "@/utils/auth0";

const SecretSSR = ({ user }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>this is the Secret page - {user && user.name}</h1>
      </BasePage>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const user = await authUser(req, res);
  return {
    props: { user },
  };
};

export default SecretSSR;
