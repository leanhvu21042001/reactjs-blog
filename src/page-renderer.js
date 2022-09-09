import React from "react";
import { useParams } from "react-router-dom";

const generatePage = (page) => {
  try {
    return React.createElement(require(`./pages/${page}`).default);
  } catch (error) {
    console.warn(error.message);
    return React.createElement(require(`./pages/not-found`).default);
  }
};

const PageRenderer = () => {
  const { page } = useParams();
  return generatePage(page);
};

export default PageRenderer;
