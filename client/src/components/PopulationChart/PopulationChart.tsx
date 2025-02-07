import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface PopulationData {
  year: number;
  value: number;
}

const PopulationChart = ({ data }: { data: PopulationData[] }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 20, bottom: 40, left: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="year"
          interval={7}
          textAnchor="middle"
          tick={{ fontSize: 12, fontFamily: "Open Sans"}}
        />
        <YAxis
          domain={['auto', 'auto']}
          allowDataOverflow
          tickCount={10}
          tickFormatter={(value) => value.toLocaleString()}
          tick={{ fontSize: 12, fontFamily: "Open Sans"}}
        />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PopulationChart;
