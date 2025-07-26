import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function TopbarManu() {
  const [selectedManu, setselectedManu] = useState(0);

  const handleclick = (index) => {
    setselectedManu(index);
    console.log(selectedManu);
  };
  const selected = " selected";

  return (
    <>
      <div className="right-topbar">
        <div className="logo">
          <img src="./logo.png" alt="logo-img" />
        </div>
        <div className="dashboard-links">
          <ul>
            <Link
              style={{ textDecoration: "none",color: "inherit" }}
              to={'/'}
              onClick={() => handleclick(0)}
            >
              <p className={selectedManu === 0 ? selected : ""}>Dashboard</p>
            </Link>
            <Link
              style={{ textDecoration: "none",color: "inherit"  }}
              onClick={() => handleclick(1)}
              to={'/orders'}
            >
              <p className={selectedManu === 1 ? selected : ""}>Order</p>{" "}
            </Link>
            <Link
              style={{ textDecoration: "none",color: "inherit"  }}
              onClick={() => handleclick(2)}
              to={'/holdings'}
            >
              {" "}
              <p className={selectedManu === 2 ? selected : ""}>Holdings</p>
            </Link>
            <Link
              style={{ textDecoration: "none",color: "inherit"  }}
              onClick={() => handleclick(3)}
              to={'/positions'}
            >
              <p className={selectedManu === 3 ? selected : ""}>Position</p>
            </Link>
            <Link
              style={{ textDecoration: "none",color: "inherit"  }}
              onClick={() => handleclick(4)}
              to={'/funds'}
            >
              <p className={selectedManu === 4 ? selected : ""}>Fund</p>
            </Link>
            <Link
              style={{ textDecoration: "none",color: "inherit"  }}
              onClick={() => handleclick(5)}
              to={'/apps'}
            >
              <p className={selectedManu === 5 ? selected : ""}>App</p>
            </Link>
          </ul>

          <div className="Login-user">
            <Avatar src="/broken-image.jpg" />
            <p>userid</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopbarManu;
