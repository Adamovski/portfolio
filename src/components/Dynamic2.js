import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, animateScroll as scroll } from "react-scroll";

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
  .link {
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    grid-column: 1/4;
    letter-spacing: 2px;
  }
`;

const Header2 = ({ isVisible }) => {
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
          <div className="link">
            <h2>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </h2>
          </div>
        </Slide>
      </CSSTransition>
    </TransitionGroup>
  ) : null;
};

export default Header2;
