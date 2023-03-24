import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import styled from 'styled-components';

const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#AF19FF',
  '#FF1919',
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {Math.floor(percent * 100)}%
    </text>
  );
};

export function CalPieChart(props) {
  const { data } = props;

  return (
    <PieChart width={400} height={280}>
      <Pie
        data={data}
        cx={200}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend align="center" verticalAlign="bottom" />
    </PieChart>
  );
}
