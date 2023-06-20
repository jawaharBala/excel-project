import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from "react-router-dom";
import { Avatar, Tooltip } from '@mui/material';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/logo.png" />
              </IconButton>
            </Tooltip>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography onClick={()=>navigate("/")} variant="h6" component="div" sx={{ flexGrow: 0, ":hover":{cursor:"pointer"} }}>
            Home
          </Typography>
          <Typography onClick={()=>navigate("/spreadsheet")} variant="h6" component="div" sx={{ flexGrow: 1, ":hover":{cursor:"pointer"} }}>
            Spreadsheets
          </Typography>
          <Button onClick={()=>navigate("/login")} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}