import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left px-2 ">
          <h2 className="h1 ">Entfesseln Sie Ihre innere Stilikone</h2>
          <p>Entdecken Sie die neuesten Trends und werten Sie Ihren Outfit noch heute auf</p>
          <p></p>
          <a className="button button-primary" href="#">
            SHOW
          </a> 
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};