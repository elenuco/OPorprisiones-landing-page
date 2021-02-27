import React, { useState } from "react";
import { link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <link to="/" className="navbar-logo">
            Oporprisiones
          </link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
