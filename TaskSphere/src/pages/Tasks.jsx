import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaTasks,
  FaTimes,
  FaSave,
} from "react-icons/fa";

import "../styles/Tasks.css";

const Tasks = () => {
  const [search, setSearch] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build Login Page",
      employee: "Robert Onsate",
      priority: "High",
      status: "In Progress",
      deadline: "2026-08-15",
    },
    {
      id: 2,
      title: "Design Dashboard",
      employee: "Mary Jane",
      priority: "Medium",
      status: "Completed",
      deadline: "2026-08-10",
    },
    {
      id: 3,
      title: "Connect Flask API",
      employee: "John Doe",
      priority: "Low",
      status: "Pending",
      deadline: "2026-08-18",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    employee: "",
    priority: "Medium",
    status: "Pending",
    deadline: "",
  });

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.employee.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openAddModal = () => {
    setEditingTask(null);

    setFormData({
      title: "",
      employee: "",
      priority: "Medium",
      status: "Pending",
      deadline: "",
    });

    setShowModal(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setFormData(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id
            ? { ...formData, id: editingTask.id }
            : task
        )
      );
    } else {
      setTasks([
        ...tasks,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    closeModal();
  };

  const deleteTask = (id) => {
    if (window.confirm("Delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

 return (
    <div className="tasks">

      <div className="tasks-header">

        <h1>
          <FaTasks />
          Tasks
        </h1>

        <button
          className="add-btn"
          onClick={openAddModal}
        >
          <FaPlus />
          New Task
        </button>

      </div>

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>

              <th>Task</th>

              <th>Assigned To</th>

              <th>Priority</th>

              <th>Status</th>

              <th>Deadline</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredTasks.length > 0 ? (

              filteredTasks.map((task) => (

                <tr key={task.id}>

                  <td>{task.title}</td>

                  <td>{task.employee}</td>

                  <td>

                    <span
                      className={`priority ${task.priority.toLowerCase()}`}
                    >
                      {task.priority}
                    </span>

                  </td>

                  <td>

                    <span
                      className={`status ${task.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {task.status}
                    </span>

                  </td>

                  <td>{task.deadline}</td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => openEditModal(task)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td colSpan="6" className="no-data">
                  No tasks found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {showModal && (
        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">

              <h2>
                {editingTask ? "Edit Task" : "Add New Task"}
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
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="employee"
                placeholder="Assigned Employee"
                value={formData.employee}
                onChange={handleChange}
                required
              />

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
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
                  {editingTask ? "Update Task" : "Save Task"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )} 
       </div>
  );
};

export default Tasks;