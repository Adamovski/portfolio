import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  background: black;
  padding-bottom: 2rem;
  .grid {
    margin: 0 auto;
    display: grid;
    width: 100%;
    max-width: 1000px;
    grid-template-columns: 1fr;
    min-height: 100vh;
    align-items: center;
    justify-items: center;
    @media (min-width: 600px) {
      grid-gap: 2rem;
      padding: 2rem;
      width: 80%;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
const ProjectCard = styled.div`
  border: solid 2px black;
  @media (max-width: 600px) {
    min-height: 100vh;
    border-radius: 0;
  }
  height: 400px;
  max-width: 100%;
  border-radius: 5px;
  padding: 2rem;
  background: rgba(256, 256, 256, 0.9);
  h4 {
    margin-top: 0;
    text-align: center;
  }
  img {
    ${"" /* border-radius: 5px; */}
    max-width: 100%;
  }
  p {
    font-size: 0.85rem;
    letter-spacing: 1px;
    line-height: 1.1rem;
  }
`;

const ProjectGrid = () => {
  return (
    <GridWrapper>
      <div className="grid">
        <ProjectCard>
          <h4>The Plant Exchange</h4>
          <a target="tab" href="https://the-plant-exchan.web.app/">
            <img
              src={require("../assets/images/Screenshot 2020-06-10 at 16.20.00.png")}
            ></img>
          </a>
          <p className="description">
            A web app with full CRUD functionality and online storage built
            using react and firebase
          </p>
        </ProjectCard>
        <ProjectCard>
          <h4>Pixabay Gallery</h4>
          <a
            href="https://pixabaygallery.web.app/pixabayApiGallery"
            target="tab"
          >
            <img
              src={require("../assets/images/Screenshot 2020-06-09 at 19.00.09.png")}
            ></img>
          </a>
          <p className="description">
            An interactive gallery built using the pixabay API
          </p>
        </ProjectCard>
        <ProjectCard>
          <h4>Colour Guessing Game</h4>
          <a href="https://colour-guess.web.app/" target="tab">
            <img
              src={require("../assets/images/Screenshot 2020-06-09 at 20.15.33.png")}
            ></img>
          </a>
          <p className="description">
            A fun colour guessing game to teach you RGB
          </p>
        </ProjectCard>
      </div>
    </GridWrapper>
  );
};

export default ProjectGrid;
