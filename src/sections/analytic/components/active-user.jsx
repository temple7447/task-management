import React from 'react';
import { Box, Typography, CircularProgress, useTheme } from '@mui/material';

const CircularProgressWithLabel = ({ value, color, size, thickness, children }) => (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
            variant="determinate"
            value={100}
            size={size}
            thickness={thickness}
            sx={{ color: (theme) => theme.palette.grey[200] }}
        />
        <CircularProgress
            variant="determinate"
            value={value}
            size={size}
            thickness={thickness}
            sx={{
                color: color,
                position: 'absolute',
                left: 0,
            }}
        />
        <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {children}
        </Box>
    </Box>
);

export default function Activeusers() {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, p: 3 }}>
            <CircularProgressWithLabel value={100} color={"#415BE7"} size={100} thickness={4}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="div" color="primary" fontWeight="bold">
                        08
                    </Typography>
                    <Typography variant="caption" component="div" color="text.secondary">
                        Total
                    </Typography>
                </Box>
            </CircularProgressWithLabel>



            <Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#E65889', mr: 1 }} />
                    <Typography variant="body2">All users</Typography>
                </Box>

            </Box>
        </Box>
    );
}