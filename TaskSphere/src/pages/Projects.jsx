import React, { useState } from "react";
import {
  FaProjectDiagram,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaTimes,
  FaSave,
} from "react-icons/fa";

import "../styles/Projects.css";

const Projects = () => {

  const [search, setSearch] = useState("");

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "TaskSphere Website",
      manager: "Robert Onsate",
      team: 6,
      progress: 80,
      status: "In Progress",
      deadline: "2026-08-20",
      description: "Develop the TaskSphere Management System.",
    },
    {
      id: 2,
      name: "Employee Portal",
      manager: "Mary Jane",
      team: 4,
      progress: 100,
      status: "Completed",
      deadline: "2026-08-05",
      description: "Internal employee self-service portal.",
    },
    {
      id: 3,
      name: "Inventory System",
      manager: "John Doe",
      team: 5,
      progress: 35,
      status: "Planning",
      deadline: "2026-09-10",
      description: "Inventory Management Application.",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [editingProject, setEditingProject] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    manager: "",
    team: "",
    progress: 0,
    status: "Planning",
    deadline: "",
    description: "",
  });

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.manager.toLowerCase().includes(search.toLowerCase()) ||
      project.status.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "team" || name === "progress"
          ? Number(value)
          : value,
    });

  };

  const openAddModal = () => {

    setEditingProject(null);

    setFormData({
      name: "",
      manager: "",
      team: "",
      progress: 0,
      status: "Planning",
      deadline: "",
      description: "",
    });

    setShowModal(true);

  };

  const openEditModal = (project) => {

    setEditingProject(project);

    setFormData(project);

    setShowModal(true);

  };

  const closeModal = () => {

    setShowModal(false);

    setEditingProject(null);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.manager ||
      !formData.deadline
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingProject) {

      setProjects(
        projects.map((project) =>
          project.id === editingProject.id
            ? {
                ...formData,
                id: editingProject.id,
              }
            : project
        )
      );

    } else {

      setProjects([
        ...projects,
        {
          ...formData,
          id: Date.now(),
        },
      ]);

    }

    closeModal();

  };

  const deleteProject = (id) => {

    if (window.confirm("Delete this project?")) {

      setProjects(
        projects.filter(
          (project) => project.id !== id
        )
      );

    }

  };

 return (
    <div className="projects">

      <div className="projects-header">

        <h1>
          <FaProjectDiagram />
          Projects
        </h1>

        <button
          className="add-btn"
          onClick={openAddModal}
        >
          <FaPlus />
          New Project
        </button>

      </div>

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="projects-grid">

        {filteredProjects.length > 0 ? (

          filteredProjects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              <div className="project-top">

                <h2>{project.name}</h2>

                <span
                  className={`status ${project.status
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {project.status}
                </span>

              </div>

              <p>
                <strong>Project Manager:</strong>
                {" "}
                {project.manager}
              </p>

              <p>
                <strong>Team Members:</strong>
                {" "}
                {project.team}
              </p>

              <p>
                <strong>Deadline:</strong>
                {" "}
                {project.deadline}
              </p>

              <p className="description">
                {project.description}
              </p>

              <div className="progress-container">

                <div
                  className="progress-bar"
                  style={{
                    width: `${project.progress}%`,
                  }}
                ></div>

              </div>

              <p className="progress-text">
                {project.progress}% Complete
              </p>

              <div className="project-actions">

                <button
                  className="edit-btn"
                  onClick={() => openEditModal(project)}
                >
                  <FaEdit />
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteProject(project.id)
                  }
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-projects">
            No projects found.
          </div>

        )}

      </div>
        {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <h2>

                {editingProject
                  ? "Edit Project"
                  : "Add New Project"}

              </h2>

              <button
                className="close-btn"
                onClick={closeModal}
              >
                <FaTimes />
              </button>

            </div>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="manager"
                placeholder="Project Manager"
                value={formData.manager}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="team"
                placeholder="Number of Team Members"
                value={formData.team}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="progress"
                placeholder="Progress (%)"
                min="0"
                max="100"
                value={formData.progress}
                onChange={handleChange}
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Planning">
                  Planning
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>

              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
              />

              <textarea
                name="description"
                placeholder="Project Description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              />

              <div className="modal-buttons">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  <FaTimes />
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  <FaSave />
                  {editingProject
                    ? "Update Project"
                    : "Save Project"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}
    </div>
  );    
}

export default Projects;