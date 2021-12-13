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
      name: "2020-08",
      "Vendas de 2021": 4000,
      "Vendas de 2020": 2400,
      amt: 2400,
    },
    {
      name: "2020-09",
      "Vendas de 2021": 3000,
      "Vendas de 2020": 1398,
      amt: 2210,
    },
    {
      name: "2020-10",
      "Vendas de 2021": 2000,
      "Vendas de 2020": 9800,
      amt: 2290,
    },
    {
      name: "2020-11",
      "Vendas de 2021": 2780,
      "Vendas de 2020": 3908,
      amt: 2000,
    },
    {
      name: "2020-12",
      "Vendas de 2021": 1890,
      "Vendas de 2020": 4800,
      amt: 2181,
    },
    {
      name: "2021-02",
      "Vendas de 2021": 3997,
      "Vendas de 2020": 3111,
      amt: 2500,
    },
    {
      name: "2021-03",
      "Vendas de 2021": 3490,
      "Vendas de 2020": 2515,
      amt: 2100,
    },

    {
      name: "2021-04",
      "Vendas de 2021": 5000,
      "Vendas de 2020": 4300,
      amt: 2100,
    },

        
    {
      name: "2021-05",
      "Vendas de 2021": 5000,
      "Vendas de 2020": 4300,
      amt: 2100,
    },

        
    {
      name: "2021-06",
      "Vendas de 2021": 6111,
      "Vendas de 2020": 5000,
      amt: 2100,
    },


    {
      name: "2021-07",
      "Vendas de 2021": 6820,
      "Vendas de 2020": 4100,
      amt: 2100,
    },


  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Relatório de vendas</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd"  />
          <YAxis />
          <Tooltip />
          
          <Legend />
          <Line type="monotone" dataKey="Vendas de 2020" stroke="#b8860b" activeDot={{ r: 8 }}  />
          <Line type="monotone" dataKey="Vendas de 2021" stroke="#A902DB" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
