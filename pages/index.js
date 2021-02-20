import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Grid, Container } from "semantic-ui-react";
import Typed from "react-typed";
import BasePage from "../components/BasePage";

const ROLES = [
  "Developer",
  "Tech-Lover",
  "Team Player",
  "React.js",
  "Next.js",
  "Django",
];
const Index = () => {
  return (
    <BaseLayout className="cover">
      <BasePage>
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column computer={8} mobile={16}>
                  <div className="hero-section">
                    <div className={`flipper`}>
                      <div className="back">
                        <div className="hero-section-content">
                          <h2> Full Stack Web Developer </h2>
                          <div className="hero-section-content-intro">
                            Have a look at my portfolio and job history.
                          </div>
                        </div>
                        <img className="image" src="/images/section-1.png" />
                        <div className="shadow-custom">
                          <div className="shadow-inner"> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid.Column>
                <Grid.Column
                  computer={8}
                  mobile={16}
                  className="hero-welcome-wrapper"
                >
                  <div className="hero-welcome-text">
                    <h1>
                      Welcome to the portfolio website of Sean Madzelonka. Get
                      informed, collaborate and discover projects Ive been
                      working on!
                    </h1>
                  </div>
                  <Typed
                    loop
                    strings={ROLES}
                    typeSpeed={70}
                    backSpeed={70}
                    backDelay={1000}
                    loopCount={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  ></Typed>
                  <div className="hero-welcome-bio">
                    <h1>Let's take a look on my work.</h1>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default Index;
