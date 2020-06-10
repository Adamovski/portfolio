import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Slide = styled.div`
  &.slide-appear {
    opacity: 0;
    z-index: 1;
  }
  &.slide-appear.slide-appear-active {
    opacity: 1;
    transition: opacity 2000ms linear;
  }
  &.slide-enter {
    opacity: 0;
    z-index: 1;
  }
  &.slide-enter.slide-enter-active {
    opacity: 1;
    transition: opacity 2000ms linear;
  }
`;

const Header = ({ isVisible }) => {
  return isVisible ? (
    <TransitionGroup>
      <CSSTransition
        in={isVisible}
        appear={true}
        timeout={2000}
        classNames="slide"
        key={"true"}
      >
        <Slide>
          <h1>ADAM TARNOWSKI</h1>
          <p>
            React DEVELOPER
            <br />
            <a href="https://github.com/Adamovski" target="tab">
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
          </p>
        </Slide>
      </CSSTransition>
    </TransitionGroup>
  ) : null;
};

export default Header;
