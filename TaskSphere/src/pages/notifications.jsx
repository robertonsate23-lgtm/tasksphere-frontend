import React, { useEffect, useState } from "react";
import {
  getNotifications,
  markAsRead,
  deleteNotification,
} from "../services/notificationService";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await getNotifications();
      setNotifications(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRead = async (id) => {
    await markAsRead(id);
    loadNotifications();
  };

  const handleDelete = async (id) => {
    await deleteNotification(id);
    loadNotifications();
  };

  return (
    <div className="container">
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        notifications.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{
              marginBottom: "15px",
              padding: "15px",
            }}
          >
            <h4>{item.title}</h4>

            <p>{item.message}</p>

            <small>
              {item.is_read ? "Read" : "Unread"}
            </small>

            <br />

            {!item.is_read && (
              <button onClick={() => handleRead(item.id)}>
                Mark Read
              </button>
            )}

            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Notifications;