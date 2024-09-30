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
import NotificationView from './notification-view';
import RoleView from './role-view';
import SupportView from './support-view';

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
                <Tab label="Profile" />
                <Tab label="Notifications" />
                <Tab label="Support" />
                <Tab label="Roles and Priviledges" />
            </Tabs>
            <Box sx={{ p: 3 }}>
                {value === 0 && (
                    <DetailsProjectView />
                )}
                {value === 1 && (
                    <NotificationView />
                )}
                {value === 2 && (
                    <SupportView />
                )}
                {value === 3 && (
                    <RoleView />
                )}
            </Box>
        </Box>
    );
}