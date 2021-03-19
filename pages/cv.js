import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Row, Col } from "reactstrap";
import { useGetUser } from "@/actions/user";

const Cv = () => {
  const { data, error, loading } = useGetUser();

  return (
    <BaseLayout user={data} error={error} loading={loading}>
      <BasePage>
        <Row>
          <Col md={12}>
            <iframe
              style={{ width: "100%", height: "800px" }}
              src="/WedDevResume.pdf"
            />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default Cv;
