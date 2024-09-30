import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Avatar, Box, Typography } from '@mui/material';

const data = [
    { name: 'Task 1', value: 2, fill: '#FF4081' },
    { name: 'Task 2', value: 3, fill: '#00E676' },
    { name: 'Task 3', value: 1, fill: '#42A5F5' },
    { name: 'Task 4', value: 4, fill: '#FFEB3B' },
    { name: 'Task 5', value: 8, fill: '#3F51B5' }, // Largest value (most tasks)
    { name: 'Task 6', value: 5, fill: '#F57F17' },
    { name: 'Task 7', value: 7, fill: '#FF5722' },
];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
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
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const TaskDistributionChart = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
            {/* Pie chart section */}
            <ResponsiveContainer width={126} height={126}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={50} // Adjust the radius based on the new size
                        labelLine={false}
                        label={renderCustomLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            {/* Task info section */}
            <Box display="flex" mt={2} alignItems="center">
                {/* Most Tasks */}
                <Box display="flex" alignItems="center" mr={4}>
                    <Avatar
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Most Tasks"
                        style={{ width: 40, height: 40 }}
                    />
                    <Typography variant="body1" style={{ marginLeft: 10 }}>
                        8 tasks (most)
                    </Typography>
                </Box>

                {/* Least Tasks */}
                <Box display="flex" alignItems="center">
                    <Avatar
                        src="https://randomuser.me/api/portraits/women/76.jpg"
                        alt="Least Tasks"
                        style={{ width: 40, height: 40 }}
                    />
                    <Typography variant="body1" style={{ marginLeft: 10 }}>
                        1 task (least)
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TaskDistributionChart;
