import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      {/* <a
        class="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Link with href
      </a> */}
      <button
        class="btn btn-primary collapseBtn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        
        {/* Button with data-bs-target */}
        <box-icon name='menu'></box-icon>
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel" style={{marginLeft:"70px"}}>
            Issue Tracker
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            {/* Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc. */}
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/" >
                <box-icon type='solid' name='dashboard'></box-icon>
                  Dashboard
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/users">
                <box-icon name='user' type='solid' ></box-icon>
                  Users
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/tickets">
                <box-icon type='solid' name='message-square-detail'></box-icon>
                  Tickets
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/profile">
                <box-icon name='user-circle' type='solid' ></box-icon>
                  Profile
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="/home"
                  tabindex="-1"
                  aria-disabled="true"
                >
                <box-icon type='solid' name='log-out-circle'></box-icon>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown mt-3">
            {/* <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button> */}
            {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
