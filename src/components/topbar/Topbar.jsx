import React from "react";
import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";

import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import InputBase from '@material-ui/core/InputBase';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className={"topLeft"}>
         
         <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>

            <InputBase className="inputBase"
              placeholder="Pesquisar"
            />
          </div>
        </div>

        <div className={"topRight"}>
          <div className={"topbarInconContainer"}>
            <NotificationsNoneIcon />
            <span className={"topIconBadge"}>2</span>
          </div>

          <img
            src="https://images.pexels.com/photos/9085681/pexels-photo-9085681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
