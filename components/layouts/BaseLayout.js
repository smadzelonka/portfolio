import React from "react";
import Headers from "../shared/Headers";

const BaseLayout = (props) => {
  return (
    <>
      <Headers />
      {props.children}
    </>
  );
};

export default BaseLayout;
