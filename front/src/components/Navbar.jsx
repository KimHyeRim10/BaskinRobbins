import React from "react";
import "../css/menulist.css";
import { NavLink, Link } from "react-router-dom";

export function NavbarStory() {
  const menu = [
    { path: "/story/story", name: "브랜드 스토리" },
    { path: "/story/history", name: "이달의 맛 히스토리" },
    { path: "/story/bebetter", name: "Be Better" },
  ];

  return (
    <div className="page_navbars_div">
      <ul className="page_navbars">
        {menu.map((item) => (
          <li className="page_navbar">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "page_navbar_text_active" : "page_navbar_text"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
