import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as BannerIllustration } from "../assets/Images/Home-Page/events-illustration.svg";

const StyledBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;

  @media (min-width: 775px) {
    height: calc(100vh - 210px);

    @media (max-height: 950px) {
      height: unset;
    }
  }

  @media (max-width: 1300px) {
    margin-bottom: 2rem;
  }

  .banner-text-container {
    padding: 4.5rem 15% 0rem 5%;
    flex: 0 0 53%;
    display: flex;
    flex-direction: column;

    h1 {
      line-height: 3rem;
      margin-bottom: 2rem;
    }

    p:first-line {
      padding-left: 1rem;
    }
    p:nth-of-type(1) {
      margin-bottom: 2rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--white);
      width: max-content;
      margin-top: 3rem;
      padding: 1rem 3rem;
      background-color: var(--accent-color);
    }
  }

  svg {
    flex: 0 0 40%;
    height: max-content;
    padding-top: 4.5rem;
    margin-left: 2rem;
  }

  //   Large Desktop and smaller

  @media only screen and (max-width: 1980px) {
  }

  // Laptop Large

  @media only screen and (max-width: 1600px) {
    .banner-text-container {
      flex: 0 0 50%;
    }

    svg {
      flex: 0 0 40%;
      margin-top: 2%;
      margin-left: 0;
    }
  }

  //   Tablet breakpoint all the way to phone size
  @media only screen and (max-width: 950px) {
    .banner-text-container {
      padding: 3%;
    }
  }

  //   phones and smaller
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    .banner-text-container {
      flex: 0 0 80%;
      padding-top: 2rem;

      h1 {
        margin-bottom: 1rem;
      }

      p:nth-of-type(1) {
        margin-bottom: 1rem;
      }
    }

    svg {
      flex: 0 0 80%;
      padding-top: 4rem;
      padding-bottom: 4rem;
      height: max-content;
    }
  }
`;

export default function Home() {

  return (
    <>
      <StyledBannerContainer className="responsive">
        <div className="banner-text-container">
          <h1>Potluck Planner</h1>

          <p>
            If you have ever tried to organize a potluck through text messages,
            online to-do lists or spreadsheets, you'll understand why this app
            is essential.
          </p>

          <p>
            In the world of social gatherings and potlucks. The "Potluck
            Planner" is king. This is your place for all things potluck
          </p>

          <Link to="/signup">Register Now</Link>
        </div>

        <BannerIllustration />
      </StyledBannerContainer>
    </>
  );
}
