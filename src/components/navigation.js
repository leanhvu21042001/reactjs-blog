import React from "react";

import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <span>My Reactjs Blog</span>

      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
