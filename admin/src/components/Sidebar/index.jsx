import React from "react";
import { HiOutlineDocument } from "react-icons/hi2";
import { BiNews, BiVideo, BiTestTube } from "react-icons/bi";
import {
  MdOutlineArticle,
  MdOutlineIntegrationInstructions as Instructions,
} from "react-icons/md";
import { IoEarthOutline, IoJournalOutline } from "react-icons/io5";

import { NavLink } from "react-router-dom";

import "./style.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Admin Panel</h1>
      <p className="sidebar__categories--title">Categories</p>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink to="/admin/news" className="sidebar__link">
            <BiNews />
            Yangiliklar
          </NavLink>
        </li>

        <li className="sidebar__item">
          <NavLink to="/admin/laws" className="sidebar__link">
            <HiOutlineDocument />
            Hujjatlar
          </NavLink>
        </li>

        {/* <li className="sidebar__item">
          <NavLink to="/admin/books" className="sidebar__link">
            <Instructions />
            Tariflar
          </NavLink>
        </li> */}
        <li className="sidebar__item">
          <NavLink to="/admin/scientific" className="sidebar__link">
            <IoJournalOutline />
            Ma'lumotlar
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
