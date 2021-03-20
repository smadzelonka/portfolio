import { useState, useRef, useEffect } from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";

const ROLES = [
  "Developer",
  "Next.js",
  "Django",
  "Python",
  "React.js",
  "Javascript",
  "Apollo",
  "REST",
  "GraphQL",
];
const Index = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation();
    return () => flipInterval.current && clearInterval(flipInterval.current);
  }, []);

  const startAnimation = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping((prevFlipping) => !prevFlipping);
    }, 20000);
  };

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={`cover ${isFlipping ? "cover-orange" : "cover-blue"}`}
    >
      <BasePage indexPage title="Portfolio - Sean Madzelonka">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" alt="background image" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="image image-1">
                        <img
                          className="image"
                          src="/images/section-1.png"
                          alt="Image for site"
                        />
                        <div className="hero-section-content">
                          <h2> Full Stack Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history. Where
                            you can get informed, collaborate and discover
                            projects Ive been working on!
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="image image-2">
                        <img
                          className="image"
                          src="/images/section-2.png"
                          alt="image of programing octopus"
                        />
                        <div className="hero-section-content">
                          <h2>Up and coming Software Engineer</h2>
                          <div className="hero-section-content-intro">
                            Software developer ready for a project of any type!
                            I currently have more extensive knowledge of
                            javascript and python programming. As always I will
                            strive to continue learning so stay connected.
                          </div>
                        </div>
                      </div>
                      <div className="shadow-custom shadow-custom-orange">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Come Checkout my portfolio website, I'm Sean Madzelonka and
                    this is my portfolio.
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={ROLES}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h2>
                    I'm super excited to have you here, so lets take a look on
                    my work.
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Index;
