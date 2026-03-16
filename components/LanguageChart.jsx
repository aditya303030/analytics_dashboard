import { PieChart, Pie } from "recharts";

export default function LanguageChart({ data }) {
  return (
    <PieChart width={400} height={300}>
      <Pie data={data} dataKey="value" />
    </PieChart>
  );
}