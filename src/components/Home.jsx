// Home.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQueries } from "../hooks/getWindowSize";
import useMediaSize from "../hooks/useMediaSize";
import "../App.css";

import VideoHomeWEB from "../assets/Alessandro Bravi Portfolio WEB.webm";
import VideoHomeMP4 from "../assets/Alessandro Bravi Portfolio MP4.mp4";
import PosterImg from "../assets/Alessandro Bravi Portfolio Poster.jpg";

import PosterImgWeb from "../assets/Alessandro Bravi Portfolio Poster.webp";
import Footer from "./Footer";

export default function Home() {
  const { isDesktopOrLaptop } = useMediaQueries();
  const { width, height } = useMediaSize();

  return (
    <>
      <h1>Alessandro Bravi</h1>
      {isDesktopOrLaptop ? (
        <main>
          <section className="full-height flex-center">
            <div className="video-container">
              <div className="video-wrapper">
                <video
                  className="full-height-video"
                  width={width}
                  height={height}
                  playsInline
                  loading="lazy"
                  autoPlay
                  muted
                  loop
                  poster={PosterImgWeb}
                  alt="Alessandro Bravi Video Home"
                >
                  <source src={VideoHomeWEB} type="video/webm" />
                  <source src={VideoHomeMP4} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main>
          <section className="flex-center flex-col">
            <div className="video-container">
              <div className="video-wrapper">
                <video
                  className="full-height-video"
                  playsInline
                  loading="lazy"
                  preload="auto"
                  autoPlay
                  muted
                  loop
                  poster={PosterImgWeb}
                  alt="Alessandro Bravi Video Home"
                >
                  <source src={VideoHomeWEB} type="video/webm" />
                  <source src={VideoHomeMP4} type="video/mp4" />
                </video>
              </div>
            </div>
            <header className="no-padding">
              <nav>
                <ul className="flex-col flex-center">
                  <li>
                    <NavLink to="/projects" className="larger-font">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="larger-font">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="larger-font"
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IG
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
          </section>
        </main>
      )}
      <Footer></Footer>
    </>
  );
}
