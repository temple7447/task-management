import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Box, Typography, Avatar } from '@mui/material';

const data = [
    { name: 'Completed', value: 41, fill: '#00E676' },
    { name: 'Incomplete', value: 59, fill: '#F0F4FF' },
];

const TaskCompletionChart = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {/* Pie chart section */}
            <ResponsiveContainer width={116} height={116}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius={45}
                        outerRadius={50}
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            {/* Task completion text */}
            <Box display="flex" alignItems="center" mt={1}>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#6B7280',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    41%
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            bgcolor: '#00E676',
                            borderRadius: '50%',
                            marginLeft: '4px',
                            marginRight: '4px',
                        }}
                    />
                    Completed tasks
                </Typography>
            </Box>
        </Box>
    );
};

export default TaskCompletionChart;
