import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'


const Overdue = () => {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <WarningIcon color='error' />
                </ListItemIcon>
                <ListItemText
                    primary='Submit expense report'
                    secondary='Overdue: 2 days'
                />
            </ListItem>
        </List>
    )
}

export default Overdue
