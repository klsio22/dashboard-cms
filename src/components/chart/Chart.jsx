import "./chart.css";
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

export default function Chart({ title, data, dataKeyX, dataKeyY, grid }) {
  return (
    <div className="GrupCharts">
      <div className="salesReport">
        <h3 className="salesReportTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 40,
              left: 20,
              bottom: 5,
            }}
          >
            {grid && (
              <CartesianGrid
                xAxis={12}
                strokeDasharray="5 5"
                strokeWidth=" 1px"
              />
            )}
            <XAxis dataKey={dataKeyX} stroke="#5550bd" />

            <YAxis type="number" dataKey={dataKeyY} stroke="" />

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

      <div className="icomes">
        <div className="icomesItem">
          <div className="weeklyIncomes">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 40,
                  left: 20,
                  bottom: 5,
                }}
              >
                {grid && <CartesianGrid strokeDasharray="3" />}
                <XAxis dataKey={dataKeyX} stroke="#5550bd" />

                <YAxis
                  type="number"
                  dataKey={dataKeyY}
                  tickFormatter={(tick) => {
                    if (tick >= 0 && tick <= 300) return "R$" + tick;
                    else return tick;
                  }}
                />

                <Tooltip />

                <Legend />
                <Line
                  type="monotone"
                  dataKey="Vendas de 2020"
                  stroke="#b8860b"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="Vendas de 2021"
                  stroke="#A902DB"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="monthlyIncome">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 40,
                  left: 20,
                  bottom: 5,
                }}
              >
                {grid && <CartesianGrid strokeDasharray="3" />}
                <XAxis dataKey={dataKeyX} stroke="#5550bd" />

                <YAxis
                  type="number"
                  dataKey={dataKeyY}
                  tickFormatter={(tick) => {
                    if (tick >= 0 && tick <= 300) return "R$" + tick;
                    else return tick;
                  }}
                />

                <Tooltip />

                <Legend />
                <Line
                  type="monotone"
                  dataKey="Vendas de 2020"
                  stroke="#b8860b"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="Vendas de 2021"
                  stroke="#A902DB"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
