import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Paper,
  Container,
  Fade,
  useTheme
} from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';

const QRCodeGenerator = ({ initialUrl = 'https://google.com', urlInputDisabled = false }) => {
  const [url, setUrl] = useState(initialUrl);
  const theme = useTheme();

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card 
        elevation={3}
        sx={{ 
          borderRadius: 3,
          background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.grey[50]})`,
          border: `1px solid ${theme.palette.divider}`
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <QrCodeIcon 
              sx={{ 
                fontSize: 32, 
                mr: 2, 
                color: theme.palette.primary.main 
              }} 
            />
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              QR Code Generator
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              label="Website URL"
              variant="outlined"
              value={url}
              onChange={handleUrlChange}
              disabled={urlInputDisabled}
              placeholder="Enter your website URL here"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: 2,
                  }
                }
              }}
            />
          </Box>

          {url && (
            <Fade in={!!url} timeout={500}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    background: 'white',
                    border: `2px solid ${theme.palette.grey[200]}`,
                    display: 'inline-block'
                  }}
                >
                  <QRCodeSVG 
                    value={url} 
                    size={256}
                    bgColor="transparent"
                    fgColor={theme.palette.text.primary}
                    level="M"
                    includeMargin={true}
                  />
                </Paper>
              </Box>
            </Fade>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default QRCodeGenerator;
