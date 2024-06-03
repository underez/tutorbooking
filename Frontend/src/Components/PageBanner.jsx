import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PageBanner = ({ pageName, pageTitle, num, title }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="breadcrumbs section-padding bg-[url('../images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
      <div className="container text-center">
        <h2>{title}</h2>
        <nav>
          <ol className="flex items-center justify-center space-x-3">
            <li className="breadcrumb-item">
              <Link to={"/react-templates/edumim/home"}> </Link>
            </li>
            <li className="breadcrumb-item"></li>
            <li className="text-primary">
              {pageName} {pageTitle} {num}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageBanner;
