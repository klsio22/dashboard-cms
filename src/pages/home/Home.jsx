import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

import "./home.css";
import Topbar from "../../components/topbar/Topbar";
export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <FeaturedInfo />
      <Chart />
    </div>
  );
}
