import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { Typography, Stack, Box, TextField, IconButton, Radio, FormControlLabel } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SendIcon from '@mui/icons-material/Send';

import { useState } from 'react';
import AvatarList from '../../../components/Avater/overlap';
import { calender, message, radio, userid } from '../../../_mock/image';
import { chatlist, demoMessages } from '../../../_mock/message';

// ----------------------------------------------------------------------
// sm={6} md={8}

// direction="row"
// justifyContent="space-around"
// alignItems="center"
// sx={{ p: 3, borderRadius: 2 }}
// <EmptyContainer />
// 


export default function MessageView() {

    const theme = useTheme();
    const [selected, setSelected] = useState(false);
    const [messages, setMessages] = useState(demoMessages);
    const [newMessage, setNewMessage] = useState('');

    const handleChange = (event) => {
        setSelected(event.target.checked);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: "You", content: newMessage, timestamp: new Date().toLocaleTimeString() }]);
            setNewMessage("");
        }
    };

    return (
        <Container maxWidth="xl" sx={{
            flexGrow: 1,
            flex: 1,
            pt: 2,
            height: "calc(100vh - 100px)", // Fixed height, adjust 100px as needed
            display: "flex",
            flexDirection: "column",
        }}>
            <Grid container sx={{
                flexGrow: 1,
                overflow: "hidden",
                bgcolor: "#FFFFFF",
                borderRadius: "16px",
                p: 2,
                height: "100%",
            }} spacing={3}>
                <Grid size={{ xs: 12, md: 4 }} sx={{
                    bgcolor: "#F9FAFB",
                    borderRadius: "7px",
                    border: "1px solid #F3F4F6",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                }}>
                    <Stack sx={{ px: 2, py: 1 }}>
                        <Typography component="span">Messages <Typography component="span">{chatlist.length}</Typography></Typography>
                    </Stack>
                    <Stack sx={{ overflowY: "auto", flexGrow: 1 }}>
                        {chatlist.map((item, index) => (
                            <Stack key={index} flexDirection="row" alignItems="center" justifyContent="space-between" sx={{ borderTop: "1px solid #E5E7EB", py: 2, px: 2 }}>
                                <Stack flexDirection="row" alignItems="center" columnGap={2}>
                                    <Box component="img" src={item.picture} alt="profile chat" sx={{ height: "38px", width: "38px", borderRadius: "20px" }} />
                                    <Stack>
                                        <Typography variant="subtitle2">{item.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">{item.lastmessage}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack alignItems="flex-end">
                                    <Typography variant="caption" color="text.secondary">{item.time}</Typography>
                                    {item.unreadNumber > 0 && (
                                        <Box sx={{ bgcolor: "primary.main", color: "white", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem" }}>
                                            {item.unreadNumber}
                                        </Box>
                                    )}
                                </Stack>
                            </Stack>
                        ))}
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }} sx={{
                    height: "100%",
                    overflow: "hidden"
                }}>
                    <Stack justifyContent="space-between" sx={{ height: "100%" }}>
                        <Stack direction="row" alignItems="center" sx={{
                            height: "54px",
                            borderRadius: "7px",
                            bgcolor: '#F3F4F6',
                            px: 2,
                        }}>
                            <Box component="img" src={chatlist[0].picture} alt="profile chat" sx={{ height: "38px", width: '38px', borderRadius: '20px', mr: 2 }} />
                            <Typography variant="h6">{chatlist[0].name}</Typography>
                        </Stack>

                        <Stack sx={{
                            flexGrow: 1,
                            overflowY: 'auto',
                            my: 2,
                            px: 2,
                        }}>
                            {messages.map((message, index) => (
                                <Box key={index} sx={{
                                    bgcolor: message.sender === "You" ? '#E5E7EB' : '#F3F4F6',
                                    borderRadius: '10px',
                                    p: 1,
                                    mb: 1,
                                    alignSelf: message.sender === "You" ? 'flex-end' : 'flex-start',
                                    maxWidth: '70%',
                                }}>
                                    <Typography variant="body2" fontWeight="bold">{message.sender}</Typography>
                                    <Typography variant="body1">{message.content}</Typography>
                                    <Typography variant="caption" sx={{ textAlign: 'right', display: 'block' }}>{message.timestamp}</Typography>
                                </Box>
                            ))}
                        </Stack>

                        <Stack direction="row" sx={{
                            height: "54px",
                            borderRadius: "7px",
                            bgcolor: '#F3F4F6',
                            px: 2,
                        }}>
                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder="Type a message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSendMessage();
                                    }
                                }}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                            <IconButton onClick={handleSendMessage}>
                                <SendIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
