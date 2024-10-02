import { List, ListItem, ListItemIcon, ListItemText, Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DescriptionIcon from '@mui/icons-material/Description'
import AssignmentIcon from '@mui/icons-material/Assignment'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import { shortfilm, usercompleteshortfilm } from '../../../_mock/branch'


import AvatarList from '../../../components/Avater/overlap'
import { calender, message, radio, userid } from '../../../_mock/image';
// 
const Complete = () => {
    return (
        <Stack sx={{}} flexDirection={"row"} columnGap={2} >

            {
                usercompleteshortfilm.map((item, index) => {
                    return (
                        <Stack sx={{ border: "1px solid #E47070", borderRadius: "20px", bgcolor: '#fff', width: "248px", height: "180px", p: 1 }}>
                            <Stack columnGap={1} alignItems={"center"} sx={{ borderBottom: "1px solid #F3F4F6", pb: 1 }} flexDirection={"row"}>
                                <Box component="div" sx={{ height: "8px", width: "8px", borderRadius: "2px", bgcolor: "#F7BC1E" }} />
                                <Typography component="span" sx={{ fontWeight: '500', fontSize: "14px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446', }}>{item.title}</Typography>
                            </Stack>
                            <Stack key={index} spacing={1} sx={{ height: "122px", borderRadius: "6px", bgcolor: '#FFFFFF', py: 1, px: 1, }}  >
                                <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} sx={{}}>
                                    <Box component="img" src={radio} alt="radio" sx={{ width: 20, height: 20, }} />
                                    <Typography component="span" sx={{ fontWeight: '500', fontSize: "13px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>{item.name}</Typography>
                                </Stack>
                                <Stack flexDirection={"row"} columnGap={1} alignItems={"center"} sx={{ bgcolor: "#FFF2F2", borderRadius: "4px", width: "90%", p: .5 }}>
                                    <Box component="img" src={calender} alt="calender" sx={{ width: 20, height: 20, color: "#E47070" }} />
                                    <Typography component="span" sx={{ fontWeight: '500', fontSize: "12px", fontFamily: 'Manrope', lineHeight: "19.86px", color: '#E47070' }}>{item.date}</Typography>
                                </Stack>

                                <Stack flexDirection={"row"} alignItems={"center"} columnGap={1} justifyContent={"flex-end"} sx={{}}>
                                    <AvatarList height="20px" width="20px" />
                                    <Box component="img" src={userid} alt="userid" sx={{ width: 20, height: 20, }} />
                                    <Box component="img" src={message} alt="image" sx={{ width: 20, height: 20, }} />

                                </Stack>

                            </Stack>


                        </Stack>
                    )
                })
            }

        </Stack>
    )
}

export default Complete




// <Box sx={{ py: 1, px: .7, height: "100%" }} >
// <Stack flexDirection="row" rowspacing={3} justifyContent={"space-between"} alignItems="center" sx={{ px: 1 }} >
//     <Stack flexDirection="row" rowspacing={3} columnGap={1} alignItems="center" >
//         <Box component="div" sx={{ height: "8px", width: "8px", borderRadius: "6px", bgcolor: "#F7BC1E" }} />
//         <Typography component="span" sx={{ mr: 1, fontWeight: '600', fontSize: "16px", fontFamily: 'Manrope', lineHeight: "21.86px", color: '#263446' }}>Doing</Typography>
//     </Stack>
//     <Button endIcon={<AddIcon sx={{ color: '#808898', fontSize: '13px' }} />} sx={{
//         color: '#808898', fontSize: '13px', fontWeight: '400', lineHeight: '20.8px', fontFamily: 'Manrope'
//     }} >
//         Add task
//     </Button>
// </Stack>


// <Stack spacing={1} sx={{ bgcolor: '#F3F4F6', borderRadius: "12px", height: "100%", p: 1, }} flexDirection={"row"}  >
//     {
//         shortfilm.todos.map((item, index) => (


//         ))
//     }
// </Stack>





// </Box>