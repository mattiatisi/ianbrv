import React from "react";
import Footer from "./Footer";
import { useMediaQueries } from "../hooks/getWindowSize";
import AboutImgWEB from "../assets/Alessandro Bravi About WEB.webp";
import AboutImgPNG from "../assets/Alessandro Bravi About PNG.png";
import IanBrvLogo from "../assets/ianbrv-logo.webp";

export default function About() {
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();

  return (
    <>
      {isDesktopOrLaptop && (
        <main
          className="full-height small-space"
          style={{ justifyContent: "unset" }}
        >
          <section className="full-col flex">
            <div id="aboutImg">
              <picture alt="Alessandro Bravi ianBrv">
                <source
                  srcset={AboutImgWEB}
                  alt="Alessandro Bravi ianBrv"
                  type="image/webp"
                />
                <source
                  srcset={AboutImgPNG}
                  alt="Alessandro Bravi ianBrv"
                  type="image/png"
                />
                <img
                  src={AboutImgWEB}
                  alt="Alessandro Bravi ianBrv"
                  type="image/webp"
                />
              </picture>
            </div>

            <div className="flex-col about">
              <div
                className="flex justify-content-btw "
                style={{ marginBottom: "8vh" }}
              >
                <div className="logo-text">
                  <img src={IanBrvLogo} alt="Alessandro Bravi ianBrv" />
                </div>
                <p>{new Date().getFullYear()}</p>
              </div>
              <div className="flex-col small-gap">
                <p>
                  Experienced graphic designer and video creator, able to use a
                  variety of visual languages for projects. Demostrates mastery
                  in graphic design, motion graphics, and video editing. Strong
                  conceptual skills and abilityy to convey compelling narratives
                  through images. Adaptive and detail-oriented, consistently
                  delivers aesthetically pleasing and effective solutions.
                </p>

                <p>
                  <b>Education</b> <br></br>
                  2012-2017 Liceo Artistico "Scuola del libro" di Urbino,
                  indirizzo Grafica pubblicitaria.
                  <br></br>
                  2019-2021 Laurea in Design della comunicazione Visiva presso
                  IED Firenze.
                </p>

                <p>
                  <b>My Freelance work at</b> <br></br>
                  MELPOMENE STUDIO video production agency. <br></br>
                  ARCHIMEDE6 creative studio
                </p>

                <p>
                  <b>Language</b> <br></br>
                  Italiano <br></br>
                  Inglese
                </p>
              </div>
            </div>
          </section>
        </main>
      )}

      {isTabletOrMobile && (
        <main>
          <section className="flex-col about">
            <div id="aboutImg">
              <picture alt="Alessandro Bravi ianBrv">
                <source
                  srcset={AboutImgWEB}
                  alt="Alessandro Bravi ianBrv"
                  type="image/webp"
                />
                <source
                  srcset={AboutImgPNG}
                  alt="Alessandro Bravi ianBrv"
                  type="image/png"
                />
                <img
                  src={AboutImgPNG}
                  alt="Alessandro Bravi ianBrv"
                  type="image/webp"
                />
              </picture>
            </div>
            <div className="flex-col small-gap" style={{ marginTop: "3vh" }}>
              <div className="flex justify-content-btw ">
                <div className="logo-text">
                  <img src={IanBrvLogo} alt="Alessandro Bravi ianBrv" />
                </div>
                <p>{new Date().getFullYear()}</p>
              </div>
              <div className="flex-col small-gap">
                <p>
                  Experienced graphic designer and video creator, able to use a
                  variety of visual languages for projects. Demostrates mastery
                  in graphic design, motion graphics, and video editing. Strong
                  conceptual skills and abilityy to convey compelling narratives
                  through images. Adaptive and detail-oriented, consistently
                  delivers aesthetically pleasing and effective solutions.
                </p>

                <p>
                  <b>Education</b> <br></br>
                  2012-2017 Liceo Artistico "Scuola del libro" di Urbino,
                  indirizzo Grafica.
                  <br></br>
                  2019-2021 Laurea in Design della comunicazione Visiva presso
                  IED Firenze.
                </p>
                <div className="flex justify-content-btw">
                  <p>
                    <b>My Freelance work at</b> <br></br>
                    MELPOMENE STUDIO video production agency. <br></br>
                    ARCHIMEDE6 creative studio
                  </p>

                  <p>
                    <b>Language</b> <br></br>
                    Italiano <br></br>
                    Inglese
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer></Footer>
    </>
  );
}
