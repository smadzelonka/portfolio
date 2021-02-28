import React from "react";
import Redirect from "@/components/shared/Redirect";
import { useGetUser } from "@/actions/user";
import { Dimmer, Loader } from "semantic-ui-react";

const withAuth = (Component) => {
  return (props) => {
    const { data, loading } = useGetUser();
    if (loading) {
      return (
        <Dimmer active>
          <Loader indeterminate>Loading...</Loader>
        </Dimmer>
      );
    }
    if (!data && typeof window !== "undefined") {
      return <Redirect ssr to={"/api/v1/login"} />;
    } else {
      return <Component user={data} loading={loading} {...props} />;
    }
  };
};

export default withAuth;
