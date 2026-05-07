import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", marks: 70 },
  { month: "Feb", marks: 75 },
  { month: "Mar", marks: 82 },
  { month: "Apr", marks: 90 },
  { month: "May", marks: 88 },
];

function ChartSection() {
  return (
    <div className="chart-box">
      <h2>📈 Performance Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="marks" stroke="#8b5cf6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartSection;