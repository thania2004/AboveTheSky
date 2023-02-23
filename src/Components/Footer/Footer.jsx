import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import La_Caixa_amarillo2 from "../../Assest/La_Caixa_amarillo2.png";

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={styles.footer}>
      <BottomNavigation position='relative' 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Toolbar sx={{ ml: isSmallScreen ? 2 : 25, mx: isSmallScreen ? 2 : 25 }}>
          
          <Box sx={{ display: 'flex', flexGrow: 1, my: 2, alignItems: 'center' }}>
            <img src={La_Caixa_amarillo2} alt="La_Caixa_amarillo2" height={isSmallScreen ? 50 : 75} />
            <Typography 
                variant="h6" component="div" sx={{ flexGrow: 1 }}
              >
                <span style={{ fontSize: isSmallScreen ? '2rem' : '2rem', padding: 5 }}>Above</span> 
                <span style={{ fontSize: isSmallScreen ? '1rem' : '1.5rem', HorizontalAlign: 'super', padding: 5 }}>the</span> 
                <span style={{ fontSize: isSmallScreen ? '2rem' : '2rem', color: '#ffef57', padding: 5 }}>Stars</span>
              </Typography>
          </Box>
        </Toolbar>
      </BottomNavigation>
    </Box>
  );
}