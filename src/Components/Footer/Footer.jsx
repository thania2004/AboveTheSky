import * as React from 'react';
import TransparentBox from '@mui/material/Box';
import TransparentBottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import La_Caixa_amarillo2 from "../../Assest/La_Caixa_amarillo2.png";

const styles = {
  footer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
};

export default function TransparentSimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const isBigScreen = useMediaQuery('(max-width:600px)');

  return (
    <div style={{ height: '100' }}>
      <TransparentBox sx={styles.footer}>
        <TransparentBottomNavigation 
          position='relative' 
          sx={{ backgroundColor: "transparent", justifyContent: 'left' }} 
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Toolbar sx={{ ml: isBigScreen ? 2 : 25, mx: isBigScreen ? 2 : 25, }}>
    <TransparentBox sx={{ display: 'flex', flexGrow: 1, my: 2, alignItems: 'Left', paddingTop: 20 }}>
      <img src={La_Caixa_amarillo2} alt="La_Caixa_amarillo2" height={isBigScreen ? 50 : 75} />
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ flexGrow: 1 }}
      >
        <span style={{ fontSize: isBigScreen ? '2rem' : '2rem', color: 'white', margintop: 5 }}>Above</span> 
        <span style={{ fontSize: isBigScreen ? '1rem' : '1.5rem', color: 'white', HorizontalAlign: 'super',  margintop: 5}}>the</span> 
        <span style={{ fontSize: isBigScreen ? '2rem' : '2rem', color: '#ffef57'}}>Stars</span>
      </Typography>
    </TransparentBox>
  </Toolbar>
        </TransparentBottomNavigation>
      </TransparentBox>
    </div>
  )
}