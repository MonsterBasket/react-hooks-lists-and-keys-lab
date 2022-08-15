import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
      
        projects.map((item) => <ProjectItem key={item.id} name={item.name} about={item.about} technologies={item.technologies}/>)
        //projects.map((item) => {{console.log(item)} return <ProjectItem key={item.id} project={item}/>})
      
      }</div>
    </div>
  );
}

export default ProjectList;
