import React from "react";

const NotificationCard = ({ notification }) => {
  return (
    <div className="notification-card">
      <p>{notification.message}</p>

      <small>{notification.time}</small>
    </div>
  );
};

export default NotificationCard;