import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
      <div
          className="flex flex-col items-center justify-center py-20"
          id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
              src="/Thechheaven.png"
              title="ThechHeaven Website for Computer shop"
              description="🛍️ E-Commerce Web Application Using HTML, CSS, JS, PHP, Ajax, MySql"
          />
          <ProjectCard
              src="/Saga1.png"
              title="Saga Music Instrument App"
              description="🎵 Music instrument App using Android Studio, Java, Firebase"
          />
          <ProjectCard
              src="/SpaceWebsite.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
  );
};

export default Projects;