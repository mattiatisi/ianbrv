import React from "react";
import Footer from "./Footer";
import ProjectsList from "../hooks/ProjectsList";

export default function Projects() {
  return (
    <>
      <main>
        <section className="flex-row">
          <ProjectsList />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
