import React from "react";

const Navbar = ({ setView, view }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Personal Diary
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className={`nav-link btn ${
                  view === "dailyEntries" ? "active" : ""
                }`}
                onClick={() => setView("dailyEntries")}
              >
                Daily Entries
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link btn ${
                  view === "createEntry" ? "active" : ""
                }`}
                onClick={() => setView("createEntry")}
              >
                Create New Entry
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
