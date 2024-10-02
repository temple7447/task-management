import { Typography } from '@mui/material'
import React from 'react'

const TextCustom = ({ name }) => {
    return (
        <Typography sx={{
            position: 'absolute', fontSize: 14, fontFamily: "Manrope", lineHeight: "22.4px", fontWeight: "500",
            // top: 1, // Adjust for padding
            // left: 16,
        }}>
            {name}
        </Typography>
    )
}

export default TextCustom
