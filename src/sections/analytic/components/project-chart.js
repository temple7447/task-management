import React from 'react';
import { Box, Typography, CircularProgress, useTheme, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';



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

export default function ProjectProgressDashboard() {
    const theme = useTheme();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-around">
                    <CircularProgressWithLabel value={100} color={"#415BE7"} size={{ xs: 80, sm: 100 }} thickness={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" component="div" color="primary" fontWeight="bold">
                                08
                            </Typography>
                            <Typography variant="caption" component="div" color="text.secondary">
                                Total
                            </Typography>
                        </Box>
                    </CircularProgressWithLabel>

                    <Box sx={{ position: 'relative' }}>
                        <CircularProgressWithLabel value={75} color={"#E65889"} size={{ xs: 80, sm: 100 }} thickness={4}>
                            <CircularProgress
                                variant="determinate"
                                value={25}
                                size={100}
                                thickness={4}
                                sx={{
                                    color: "#E65889",
                                    position: 'absolute',
                                    left: 0,
                                }}
                            />
                        </CircularProgressWithLabel>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    25%
                                </Typography>
                                <Typography variant="caption" component="div" color="text.secondary">
                                    Completion
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </Grid>
            <Grid container size={{ xs: 12, sm: 4 }}  >
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Created projects</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#E65889', mr: 1 }} />
                        <Typography variant="body2">Ongoing projects</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'success.main', mr: 1 }} />
                        <Typography variant="body2">Completed projects</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}