import React, { useState } from 'react';
import {
    Tabs,
    Tab,
    Box,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Collapse,
    IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DetailsProjectView from './view-project';

const projects = [
    {
        id: 1,
        name: "Short film project",
        dateCreated: "15th July, 2024",
        dueDate: "22nd July, 2024",
        createdBy: "Deborah Amakiri",
        color: "red"
    },
    {
        id: 2,
        name: "TV program",
        dateCreated: "20th July, 2024",
        dueDate: "30th July, 2024",
        createdBy: "John Doe",
        color: "orange"
    }
];

export default function Toptab() {
    const [value, setValue] = useState(0);
    const [expanded, setExpanded] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleExpand = (projectId) => {
        setExpanded(expanded === projectId ? null : projectId);
    };

    return (
        <Box sx={{ width: '100%', margin: 'auto', mt: 2 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                sx={{ borderBottom: "1px solid #F3F4F6", px: 5 }}
            >
                <Tab label="Projects" />
                <Tab label="Tasks" />
            </Tabs>
            <Box sx={{ p: 3 }}>
                {value === 0 && (
                    <Paper elevation={0}>
                        <List>
                            {projects.map((project) => (
                                <ListItem key={project.id} divider>
                                    <ListItemText
                                        primary={
                                            <Box display="flex" alignItems="center">
                                                <Box
                                                    sx={{
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: '50%',
                                                        backgroundColor: project.color,
                                                        marginRight: 2
                                                    }}
                                                />
                                                <Typography variant="subtitle1">{project.name}</Typography>
                                                <IconButton
                                                    onClick={() => handleExpand(project.id)}
                                                    sx={{ marginLeft: 'auto' }}
                                                >
                                                    {expanded === project.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                </IconButton>
                                            </Box>
                                        }
                                    />
                                    <Collapse in={expanded === project.id} timeout="auto" unmountOnExit>
                                        <Box sx={{ mt: 2, ml: 2 }}>
                                            <Typography variant="body2">Date created: {project.dateCreated}</Typography>
                                            <Typography variant="body2">Due date: {project.dueDate}</Typography>
                                            <Box display="flex" alignItems="center" mt={1}>
                                                <Typography variant="body2">Created by:</Typography>
                                                <Avatar sx={{ width: 24, height: 24, ml: 1, mr: 1 }} />
                                                <Typography variant="body2">{project.createdBy}</Typography>
                                            </Box>
                                        </Box>
                                    </Collapse>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
                {value === 1 && (
                    <DetailsProjectView />
                )}
            </Box>
        </Box>
    );
}