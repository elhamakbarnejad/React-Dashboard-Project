import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const OverviewChart = ({
  Value1,
  Value2,
  Value3,
  Value4,
  Value5,
  Value6,
  Value7,
  Value8,
  Value9,
  Value10,
}) => {
  const data = [
    { title: "Item1", value: Value1 },
    { title: "Item2", value: Value2 },
    { title: "Item3", value: Value3 },
    { title: "Item4", value: Value4 },
    { title: "Item5", value: Value5 },
    { title: "Item6", value: Value6 },
    { title: "Item7", value: Value7 },
    { title: "Item8", value: Value8 },
    { title: "Item9", value: Value9 },
    { title: "Item10", value: Value10 },
  ];

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center gap-2">
      <h1 className="font-bold text-2xl text-sky-600"> Sample Chart </h1>{" "}
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            style={{ background: " #e6ffff" }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" barSize={50} fill="#b3e0ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default OverviewChart;
