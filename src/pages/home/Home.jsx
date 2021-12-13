import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import Topbar from "../../components/topbar/Topbar";
import { salesReport } from "../../dummyDate";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <FeaturedInfo />
      <Chart
        data={salesReport}
        title="Relatório de vendas"
        dataKeyX="name"
        dataKeyY="valueMax"
        grid
        real="real"
      />

     
    </div>
  );
}
