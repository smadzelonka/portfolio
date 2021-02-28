import React from "react";
import Headers from "@/components/shared/Headers";

const BaseLayout = (props) => {
  const { className, user, loading, error, children } = props;
  return (
    <div className="layout-container">
      <Headers user={user} loading={loading} error={error} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
