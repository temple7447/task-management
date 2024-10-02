import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'

const Upcoming = () => {
    return (
        <List sx={{ bgcolor: 'red' }}   >
            <ListItem>
                <ListItemIcon>
                    <AssignmentIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                    primary='Complete project proposal'
                    secondary='Due: Tomorrow'
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AssignmentIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                    primary='Complete project proposal'
                    secondary='Due: Tomorrow'
                />
            </ListItem>


            <ListItem>
                <ListItemIcon>
                    <AssignmentIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                    primary='Complete project proposal'
                    secondary='Due: Tomorrow'
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AssignmentIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                    primary='Complete project proposal'
                    secondary='Due: Tomorrow'
                />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AssignmentIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                    primary='Review team presentations'
                    secondary='Due: Next week'
                />
            </ListItem>
        </List>
    )
}



export default Upcoming
