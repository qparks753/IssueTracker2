import React from "react";
import "./Sidebar.scss";


const Sidebar = () => {



  return (
    <div className="Sidebar">
      <div className="logo">
        <box-icon className="Sidebarimg" type="solid" name="bug"></box-icon>
        <span>Issue Tracker</span>
      </div>

      <div className="menu">
        <div className="menuitem">
          <box-icon name="home-alt"></box-icon>
          <span>Dashboard</span>
        </div>

        <div className="menuitem">
         <box-icon name='user'></box-icon>
            <span>Users</span>
          </div>

          <div className="menuitem">
          <box-icon name='message-alt-edit'></box-icon>
            <span>Tickets</span>
          </div>

          <div className="menuitem">
          <box-icon name='user-circle'></box-icon>
            <span>Profile</span>
          </div>
          <div className="logout">
          <box-icon name='log-out'></box-icon>
            <span>Log Out</span>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
