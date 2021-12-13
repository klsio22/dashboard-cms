import "./chart.css";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      valueMax: 300,
    },

    {
      name: "2020-08",
      "Vendas de 2021": 140,
      "Vendas de 2020": 50,
      amt: 2400,
    },
    {
      name: "2020-09",
      "Vendas de 2021": 120,
      "Vendas de 2020": 70,
      amt: 2210,
    },
    {
      name: "2020-10",
      "Vendas de 2021": 140,
      "Vendas de 2020": 80,
      amt: 2290,
    },
    {
      name: "2020-11",
      "Vendas de 2021": 180,
      "Vendas de 2020": 60,
      amt: 2000,
    },
    {
      name: "2020-12",
      "Vendas de 2021": 120,
      "Vendas de 2020": 100,
      amt: 2181,
    },
    {
      name: "2021-02",
      "Vendas de 2021": 80,
      "Vendas de 2020": 120,
      amt: 2500,
    },
    {
      name: "2021-03",
      "Vendas de 2021": 190,
      "Vendas de 2020": 100,
      amt: 2100,
    },

    {
      name: "2021-04",
      "Vendas de 2021": 200,
      "Vendas de 2020": 90,
      amt: 2100,
    },

    {
      name: "2021-05",
      "Vendas de 2021": 210,
      "Vendas de 2020": 110,
      amt: 2100,
    },

    {
      name: "2021-06",
      "Vendas de 2021": 198,
      "Vendas de 2020": 60,
      amt: 2100,
    },

    {
      name: "2021-07",
      "Vendas de 2021": 220,
      "Vendas de 2020": 89,
      amt: 2100,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Relatório de vendas</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 40,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis dataKey="valueMax" />
          <Tooltip />

          <Legend />
          <Line
            type="monotone"
            dataKey="Vendas de 2020"
            stroke="#b8860b"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Vendas de 2021" stroke="#A902DB" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
