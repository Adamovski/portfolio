import React, { useState, useEffect } from "react";
import styled from "styled-components";
import images from "../assets/images/colour-1885352_1920.jpg";
import ProjectGrid from "./ProjectGrid";

import Header from "./DynamicPart";
import Header2 from "./Dynamic2";

const LandingWrapper = styled.div`
  border: solid 2px black;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: rgba(8, 12, 66, 0.3) url(${images}) no-repeat center center;
  background-blend-mode: darken;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: grid;
  justify-items: center;
  align-items: center;
  ${"" /* grid-template-columns: auto min-max(300px 1fr) auto; */}
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
  .header {
    text-transform: uppercase;
    color: white;
    grid-column: 1/4;
    text-align: center;
    h1 {
      margin-top: 0;
      font-size: 2rem;
      letter-spacing: 4px;
    }
    p {
      letter-spacing: 2px;
      line-height: 2rem;
      .icon {
        font-size: 1.5rem;
      }
    }
  }
`;

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LandingWrapper>
        <div className="header">
          <Header isVisible={isVisible} />
        </div>
        <div className="header">
          <Header2 isVisible={isVisible} />
        </div>
      </LandingWrapper>
      <div id="projects">
        <ProjectGrid />
      </div>
    </>
  );
};

export default Landing;
