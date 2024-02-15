import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQueries } from "../hooks/getWindowSize";
import IanBrvLogo from "../assets/ianbrv-logo.webp";
import useMediaSize from "../hooks/useMediaSize";

export default function Header() {
  const { pathname } = useLocation();
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();

  // Function to format the pathname
  const formatPathname = (path) => {
    // Remove the leading slash and capitalize the first letter
    return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
  };

  // Function to determine if the current route is the home page
  const isHomePage = pathname === "/";
  const isProjectsPage = pathname === "/projects";
  const isAboutPage = pathname === "/about";

  const [hoverStates, setHoverStates] = useState({
    home: false,
    about: false,
  });

  const handleHover = (navLink) => {
    setHoverStates({
      ...hoverStates,
      [navLink]: !hoverStates[navLink], // Toggle the hover state for the specific NavLink
    });
  };

  const isNavLinkHovered = Object.values(hoverStates).some((state) => state);

  return (
    <>
      {isDesktopOrLaptop && !isProjectsPage && (
        <>
          <header className={isProjectsPage ? "mix-blend" : ""}>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    Alessandro Bravi
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      isActive
                        ? "active absolute-center"
                        : "inactive absolute-center"
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </>
      )}

      {isDesktopOrLaptop && isProjectsPage && (
        <>
          <div>
            <li>
              <NavLink
                to="/"
                className={
                  hoverStates.home ? "absolute-left" : "mix-blend absolute-left"
                }
                onMouseEnter={() => handleHover("home")}
                onMouseLeave={() => handleHover("home")}
              >
                Alessandro Bravi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "active absolute-center"
                    : "inactive absolute-center"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={
                  hoverStates.about
                    ? "absolute-right"
                    : "mix-blend absolute-right"
                }
                onMouseEnter={() => handleHover("about")}
                onMouseLeave={() => handleHover("about")}
              >
                About
              </NavLink>
            </li>
          </div>
        </>
      )}

      {isTabletOrMobile && isHomePage && (
        <>
          <header>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "active" : "inactive"} fit-content`
              }
            >
              Alessandro Bravi
            </NavLink>

            <div className="top-right-header-mobile">
              <div className="logo-text">
                <img
                  loading="lazy"
                  preload="auto"
                  src={IanBrvLogo}
                  alt="Alessandro Bravi ianBrv"
                />
              </div>
              <p>
                Born in Urbino (ITA) 1998 <br></br>
                Visual artist with expertise in graphic design and video
                editing.
              </p>
            </div>
          </header>
        </>
      )}

      {!isHomePage && isTabletOrMobile && (
        <>
          <header
            className={`${
              !isAboutPage
                ? `fixed ${
                    isProjectsPage && !isNavLinkHovered ? "mix-blend" : ""
                  }`
                : ""
            }`}
          >
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${isActive ? "active" : "inactive"} fit-content`
                    }
                    onMouseEnter={() => handleHover("home")}
                    onMouseLeave={() => handleHover("home")}
                  >
                    Alessandro Bravi
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>

          <NavLink
            to={pathname}
            className={({ isActive }) =>
              isActive ? "active absolute-center" : "inactive absolute-center"
            }
          >
            {formatPathname(pathname)}
          </NavLink>
        </>
      )}

      <Outlet />
    </>
  );
}
