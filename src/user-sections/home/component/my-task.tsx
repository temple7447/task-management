import React, { useState } from 'react'
import {
  Container,
  Paper,
  Tabs,
  Tab,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  Typography,
  Box
} from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'

import Overdue from './overdue'
import Complete from './complete'
import Upcoming from './upcoming'

export default function MyTask () {
  const [value, setValue] = useState(0)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleSelectChange = (event: any) => {
    setValue(event.target.value as number)
  }

  const renderContent = () => {
    switch (value) {
      case 0:
        return <Upcoming />
      case 1:
        return <Complete />
      case 2:
        return <Overdue />
      default:
        return null
    }
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {isSmallScreen ? (
          <Select
            value={value}
            onChange={handleSelectChange}
            // fullWidth
            variant='standard'
            sx={{ p: 2 }}
          >
            <MenuItem value={0}>Due/Upcoming</MenuItem>
            <MenuItem value={1}>Completed</MenuItem>
            <MenuItem value={2}>Overdue</MenuItem>
          </Select>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            // variant='fullWidth'
          >
            <Tab label='Due/Upcoming' />
            <Tab label='Completed' />
            <Tab label='Overdue' />
          </Tabs>
        )}
      </Box>
      <Box
        sx={{
          minHeight: '50vh',
          p: 4
        }}
      >
        {renderContent() || (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <DescriptionIcon
              sx={{ fontSize: 100, color: 'text.secondary', mb: 2 }}
            />
            <Typography variant='body1' color='text.secondary' align='center'>
              Oops... seems you have not been assigned any task yet
            </Typography>
          </Box>
        )}
      </Box>
    </>
  )
}
