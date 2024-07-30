import React, { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';
import QRCode from 'qrcode.react';

const GenerateQR = () => {
    const [text, setText] = useState('');

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Generate QR Code
                </Typography>
                <TextField 
                    label="Enter text for QR code" 
                    variant="outlined" 
                    fullWidth 
                    margin="normal" 
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                />
                {text && (
                    <Box mt={4} display="flex" justifyContent="center">
                        <QRCode value={text} size={256} />
                    </Box>
                )}
            </Box>
        </Container>
    );
}

export default GenerateQR;
