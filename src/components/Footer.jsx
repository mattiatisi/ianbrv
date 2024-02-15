// Footer.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQueries } from "../hooks/getWindowSize";
import IanBrvLogo from "../assets/ianbrv-logo.webp";
import useMediaSize from "../hooks/useMediaSize";

export default function Footer() {
  const { pathname } = useLocation();
  const { isDesktopOrLaptop } = useMediaQueries();
  const isProjectsPage = pathname === "/projects";
  const { width, height } = useMediaSize();

  return (
    <>
      {isDesktopOrLaptop ? (
        <footer className={isProjectsPage ? "mix-blend" : ""}>
          <div className="flex-col">
            <div className="logo-text">
              <img
                loading="lazy"
                preload="auto"
                className={isProjectsPage ? "mix-blend-image" : ""}
                src={IanBrvLogo}
                alt="Alessandro Bravi ianBrv"
              />
            </div>
            <p>
              Born in Urbino (ITA) 1998 <br></br>
              Visual artist with expertise in graphic design and video editing.
            </p>
          </div>

          <div className="col-50 flex justify-content-btw align-items-end">
            <div className="flex align-items-end small-gap-footer">
              <div className="flex-col">
                <p>Contacts</p>
                <a href="mailto:bravirossi@gmail.com">
                  E-mail: bravirossi@gmail.com
                </a>
                <a href="tel:+393319224639 ">Cell: +39 3319224639</a>
              </div>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                IG: @alessandro_bravi
              </a>
            </div>

            <p>official website {new Date().getFullYear()}</p>
          </div>
        </footer>
      ) : (
        <footer className={isProjectsPage ? "mix-blend" : ""}>
          <div className="full-col flex justify-content-btw align-items-end">
            <div className="flex-col">
              <p>Contacts</p>
              <a href="mailto:bravirossi@gmail.com">
                E-mail: bravirossi@gmail.com
              </a>
              <a href="tel:+393319224639 ">Cell: +39 3319224639</a>
            </div>
            <p>official website {new Date().getFullYear()}</p>
          </div>
        </footer>
      )}
    </>
  );
}
