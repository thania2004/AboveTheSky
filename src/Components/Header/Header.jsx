import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import La_Caixa_amarillo2 from "../../Assets/Pictures/La_Caixa_amarillo2.png";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px', 
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50, // Add this line to increase the size of the icon
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(0.5em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
   
      <AppBar  sx={{ backgroundColor: 'blue' }}>
        <Toolbar sx={{ ml: isSmallScreen ? 2 : 25, mx: isSmallScreen ? 2 : 25 }}>
          
          <Box sx={{ display: 'flex', flexGrow: 1, my: 2, alignItems: 'center' }}>
            <img src={La_Caixa_amarillo2} alt="La_Caixa_amarillo2" height={isSmallScreen ? 50 : 75} />
            <Typography 
                variant="h6"
                Wrap
                component="div"
                sx={{ flexGrow: 1, mx: 2 }}
              >
                <span style={{ fontSize: isSmallScreen ? '2rem' : '2rem', padding: 5 }}>Above</span> 
                <span style={{ fontSize: isSmallScreen ? '1rem' : '1.5rem', HorizontalAlign: 'super', padding: 5 }}>the</span> 
                <span style={{ fontSize: isSmallScreen ? '2rem' : '2rem', color: '#ffef57', padding: 5 }}>Stars</span>
              </Typography>
          </Box>
          <Search sx={{ ml: isSmallScreen ? 1 : 2 }}>
            <SearchIconWrapper sx={{ ml: isSmallScreen ? 1 : 2 }} >
             
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="Search for your star"
            inputProps={{ 'aria-label': 'search' }}
        
          />
          </Search>
          <SearchIcon />
          <MenuIcon />
        </Toolbar>
      </AppBar>
    
  );
}