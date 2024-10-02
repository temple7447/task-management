import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Week 1', users: 10 },
    { name: 'Week 2', users: 20 },
    { name: 'Week 3', users: 27 },
    { name: 'Week 4', users: 15 },
];

const ActiveUsersChart = () => {
    return (
        <div style={{ width: '100%', height: '100%', color: "red", display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            {/* Title for the chart */}


            <ResponsiveContainer style={{ alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', }} width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 20, bottom: 10,
                    }}
                >
                    {/* Add grid */}
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* X-Axis */}
                    <XAxis dataKey="name" label={{ value: "Weeks", position: "insideBottom", dy: -10 }} />
                    {/* Y-Axis */}
                    <YAxis label={{ value: "Active users", angle: -90, position: "insideLeft", dx: -10 }} />
                    {/* Tooltip for hovering over bars */}
                    <Tooltip />
                    {/* Bars for the chart */}
                    <Bar dataKey="users" fill="#4A90E2" barSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActiveUsersChart;
