import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Une Vrai Communauté"
          description="Une ambitions ne suffit pas.. nous avons besoin d'une équipe afins de nous aidez.. Et mon équipe a moi ce nomme la Wojack (https://discord.gg/yuGtM5ZFps) comme on dis l'unions fait la force."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Aucune vrai sécurité n'existe"
          description="Nous sommes la aussi pour prouver que aucune vrai sécurité existe dans ce monde interconnecté. "
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Doxxing"
          description="Nous fessons aussi du doxing envers des personnes qui ne mérite pas d'être présent sur cette terre.. souvent appelez des ordures."
        />
      </div>
    </div>
  );
};

export default Projects;
