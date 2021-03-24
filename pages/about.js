import { useEffect } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import { Row, Col } from "reactstrap";

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window.__isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage title="About Me - Sean Madzelonka" className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>
                I'm Sean Madzelonka
              </h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Feel free to read up a little about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>
                I am an experienced software engineer and freelance developer. I
                have a strong understanding of Javascript and python
                programming.{" "}
              </p>
              <p>
                I have recently finished General Assembly's software engineering
                immersive program and im ready to take what I learned and bring
                it to all of my future projects.
              </p>
              {/* <p>feel out more here</p> */}
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
