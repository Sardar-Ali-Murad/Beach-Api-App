import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  let [ham, setHam] = React.useState(true);
  return (
    <div className="NavMain">
       {/* Big Screen Nav Starts */}
      <div className="NavMain-Small">
          {/*  */}
        <div className="nav-content">
          <div className="nav-heading">
            <h1>Beach</h1>
            <h2>Resort</h2>
          </div>

          {/*  */}
          <nav className="nav-nav">
            <ul>
              <li>
                <Link className="dark" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="dark" to="/rooms">
                  Rooms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/*  */}
        {/*  */}

        {/*  */}
        <div className="nav-icons">
          {ham ? (
            <GiHamburgerMenu
              onClick={() => setHam(false)}
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          ) : (
            <ImCross
              onClick={() => setHam(true)}
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          )}
        </div>
        {/*  */}
      </div>
      {/* Big Screen Nav Ends */}

      {/* The Small Screen NAVBAR Stats */}

      {/*  */}
      <div className="small-screen-nav">
        <nav className={`nav-nav-small ${!ham ? "small-nav-active" : ""}`}>
          <ul>
            <li>
              <Link className="dark" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="dark" to="/rooms">
                Rooms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    {/* Small Screen Nav Ends */}
      {/*  */}
    </div>
  );
};

export default Navbar;
