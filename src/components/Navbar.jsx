

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage: 'url(" https://images.pexels.com/photos/1187974/pexels-photo-1187974.jpeg?auto=compress&cs=tinysrgb&w=600")', // Example background image URL
          backgroundSize: 'same',
          backgroundPosition: 'center',
          borderRadius: '12px', 
          margin: 0, 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' 
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, color: 'grey', textShadow: '1px 1px 2px black' }}
          >
            BOOKS
          </Typography>
          <Button
            sx={{
              backgroundColor: 'rgba(255, 69, 0, 0.8)', 
              color: 'white',
              borderRadius: '8px',
              margin: '0 8px',
              '&:hover': {
                backgroundColor: 'rgba(255, 69, 0, 1)',
              },
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              backgroundColor: 'rgba(60, 179, 113, 0.8)', 
              color: 'white',
              borderRadius: '8px',
              margin: '0 8px',
              '&:hover': {
                backgroundColor: 'rgba(60, 179, 113, 1)', 
              },
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              backgroundColor: 'rgba(30, 144, 255, 0.8)', 
              color: 'white',
              borderRadius: '8px',
              margin: '0 8px',
              '&:hover': {
                backgroundColor: 'rgba(30, 144, 255, 1)',
              },
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
            }}
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

