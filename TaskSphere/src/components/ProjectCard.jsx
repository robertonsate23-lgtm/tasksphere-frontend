import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>

      <p>
        <strong>Deadline:</strong> {project.deadline}
      </p>
    </div>
  );
};

export default ProjectCard;