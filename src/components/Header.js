import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";


const StyledHeader = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--nav-height);
    width: 100%;
    background-color: var(--secondary-color);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    .home-link {
      text-decoration: none;
      color: inherit;
    }

    h2 {
      margin-left: 3rem;
      -webkit-transition: 0.5s;

      &:hover {
        color: var(--white);
        -webkit-transform-origin: 0% 100%;
      }
    }

    .mobile-nav-links-container,
    .mobile-nav-menu-btn {
      display: none;
      // toggled with js
    }

    .nav-links-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: max-content;
      margin-right: 3rem;

      a {
        display: inline-block;
        text-decoration: none;
        white-space: nowrap;
        color: inherit;
      }

      a:nth-of-type(1) {
        margin-right: 2rem;
        -webkit-transition: 0.5s;

        &:hover {
          color: var(--white);
          -webkit-transform-origin: 0% 100%;
        }
      }

      a:nth-of-type(2) {
        margin-right: 2rem;
        -webkit-transition: 0.5s;

        &:hover {
          color: var(--white);
          -webkit-transform-origin: 0% 100%;
        }
      }

      .signupLink {
        padding: 0.6rem 1rem;
        border: 1px solid black;
        -webkit-transition: 0.5s;

        &:hover {
          border: 1px solid var(--white);
          color: var(--white);
          -webkit-transform-origin: 0% 100%;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .nav-links-container {
        display: none;
      }

      .mobile-nav-menu-btn {
        display: flex;
        align-items: center;

        div {
          margin-right: 2rem;
        }

        span {
          display: block;
          width: 25px;
          height: 4px;
          margin: 5px auto;
          background-color: var(--black);
        }
      }
    }
  }

  .nav-mobile-active {
    padding-top: 1rem;
    flex-wrap: wrap;
    height: calc(var(--nav-height) * 4);
    h2,
    .nav-links-container {
      flex: 0 0 50%;
    }

    .mobile-nav-menu-btn {
      span:nth-of-type(1) {
        transform: rotate(45deg) translateY(6px);
      }
      span:nth-of-type(2) {
        display: none;
      }
      span:nth-of-type(3) {
        transform: rotate(-45deg) translateY(-6px);
      }
    }

    .mobile-nav-links-container {
      flex: 0 0 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: calc(var(--nav-height) * 2);
      width: 100%;

      a {
        text-decoration: none;
        color: inherit;
        height: 45%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: var(--black);
          color: white;
          font-weight: bold;
        }
      }
      a:nth-of-type(1) {
        margin-bottom: 0.5rem;
      }
    }
  }
`;


export default function Header({ loggedIn, setLoggedIn, token }) {


  const [navOpen, setNavOpen] = useState(false);

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);


  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    token !== null ? setLoggedIn(true) : setLoggedIn(false)
  }, [setLoggedIn, token])

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <StyledHeader>
      <nav className={navOpen && !isDesktop ? "nav-mobile-active" : null}>
        <Link to="/" className="home-link">
          <h2
            onClick={() => {
              setLoggedIn(false);
            }}
          >
            Potluck Planner{" "}
          </h2>
        </Link>

        <div className="nav-links-container">
          {loggedIn ? (
            <NavLink
              to="/upcomingevents"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--white)",
              }}
            >
              Upcoming Events
            </NavLink>
          ) : null}

          {loggedIn ? (
            <NavLink
              exact
              to="/logout"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--white)",
              }}
              onClick={() => {
                setLoggedIn(false);
              }}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--white)",
              }}
            >
              Login
            </NavLink>
          )}

          {!loggedIn ? (
            <NavLink
              to="/signup"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--white)",
                border: "1px solid var(--white)",
              }}
            >
              Sign Up
            </NavLink>
          ) : null}
        </div>

        <div onClick={toggleNav} className="mobile-nav-menu-btn">
          <div>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className="mobile-nav-links-container ">
          {loggedIn ? (
            <NavLink
              onClick={toggleNav}
              to="/upcomingevents"
              activeStyle={{
                backgroundColor: "var(--black)",
                color: "var(--white)",
                fontWeight: "bold",
              }}
            >
              Upcoming Events
            </NavLink>
          ) : null}

          {loggedIn ? (
            <NavLink
              to="/"
              activeStyle={{
                backgroundColor: "var(--black)",
                color: "var(--white)",
                fontWeight: "bold",
              }}
              onClick={() => {
                setLoggedIn(false);
                toggleNav();
              }}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              activeStyle={{
                fontWeight: "bold",
                color: "var(--white)",
              }}
            >
              Login
            </NavLink>
          )}
          {!loggedIn ? (
            <NavLink
              onClick={toggleNav}
              to="/signup"
              activeStyle={{
                backgroundColor: "var(--black)",
                color: "var(--white)",
                fontWeight: "bold",
              }}
            >
              Sign Up
            </NavLink>
          ) : null}
        </div>
      </nav>
    </StyledHeader>
  );
}
