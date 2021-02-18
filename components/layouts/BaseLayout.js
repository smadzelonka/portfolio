import React from "react";
import Headers from "../shared/Headers";

const BaseLayout = (props) => {
  const { className, children } = props;
  return (
    <div className="layout-container">
      <Headers />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
