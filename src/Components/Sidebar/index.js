import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import { LuLayoutDashboard } from "react-icons/lu";
import { IoPricetagOutline } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { SiCivicrm } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { IoIosBusiness } from "react-icons/io";

import { Auth } from "../../context/Auth.Context";

const SideBar = () => {
  const auth = Auth();
  const [active, setActive] = useState(1);
  const [expanded, setExpanded] = useState({});

  const toggleDropdown = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const menuItems = [
    { id: 8, to: "/blog", text: "Blog", icon: <FaBlog /> },
    {
      id: 7,
      to: "/analytics",
      text: "Analytics",
      icon: <MdOutlineAnalytics />,
    },
    { id: 7, to: "/settings", text: "Settings", icon: <CiSettings /> },
    { id: 7, to: "/crm", text: "CRM", icon: <SiCivicrm /> },
  ];

  return (
    <div className="sidebar col-2">
      <ul className="list-unstyled user-menubar">
        <li
          className={`${active === 3 ? "active-list" : ""}`}
          onClick={() => setActive(3)}
        >
          <Link to="/dashboard" className="menu-item">
            <div className="menu-item-text">Dashboard</div>
          </Link>
        </li>

        {/* Categories List  */}
        <li
          style={{ cursor: "pointer" }}
          onClick={() => toggleDropdown("categories")}
        >
          <div className="menu-item">
            <span className="d-flex">
              <BiCategory style={{ marginTop: "20px", marginRight: "10px" }} />
              <div className="menu-item-text">Products</div>
            </span>
          </div>
          {expanded.categories && (
            <ul className="list-unstyled">
              <li
                className={`${active === 2 ? "active-list" : ""}`}
                onClick={() => setActive(2)}
              >
                <Link to="/category" className="menu-item">
                  <div className="menu-item-text">Main Product</div>
                </Link>
              </li>
              <li
                className={`${active === 3 ? "active-list" : ""}`}
                onClick={() => setActive(3)}
              >
                <Link to="/sub-category" className="menu-item">
                  <div className="menu-item-text">Product Category</div>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Business list */}
        <li
          style={{ cursor: "pointer" }}
          onClick={() => toggleDropdown("businesses")}
        >
          <div className="menu-item">
            <span className="d-flex">
              <IoIosBusiness
                style={{ marginTop: "20px", marginRight: "10px" }}
              />
              <div className="menu-item-text">Artist</div>
            </span>
          </div>
          {expanded.businesses && (
            <ul className="list-unstyled">
              <li
                className={`${active === 5 ? "active-list" : ""}`}
                onClick={() => setActive(5)}
              >
                <Link to="/businesses" className="menu-item">
                  <div className="menu-item-text">Add Artist</div>
                </Link>
              </li>

              <li
                className={`${active === 5 ? "active-list" : ""}`}
                onClick={() => setActive(5)}
              >
                <Link to="/business-show" className="menu-item">
                  <div className="menu-item-text">Add Printings</div>
                </Link>
              </li>
            </ul>
          )}

          {/* <li
            className={`${active === 7 ? "active-list" : ""}`}
            onClick={() => setActive(7)}
          >
            <Link to="/add-staff" className="menu-item">
              <div className="menu-item-text"> Add Staff </div>
            </Link>
          </li> */}

          <li
            className={`${active === 7 ? "active-list" : ""}`}
            onClick={() => setActive(7)}
          >
            <Link to="/users" className="menu-item">
              <div className="menu-item-text"> Users </div>
            </Link>
          </li>

          <li
            className={`${active === 7 ? "active-list" : ""}`}
            onClick={() => setActive(7)}
          >
            <Link to="/reviews" className="menu-item">
              <div className="menu-item-text"> Reviews </div>
            </Link>
          </li>
        </li>

        {/* <li
          className={`${active === 6 ? "active-list" : ""}`}
          onClick={() => setActive(6)}
        >
          <Link to="/analytics" className="menu-item">
            <div className="menu-item-text">Analytics</div>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default SideBar;
