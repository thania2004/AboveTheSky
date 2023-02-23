import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/joy/Box";
import "@fontsource/poppins";

export default function ActionAreaCard(props) {
    const [open, setOpen] = React.useState(false);
      const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
  return (
    <Card  spacing={4} elevation={3} sx={{ bgcolor: 'RGB(117, 44, 160, 0.85)', Height: 600, maxWidth: 400,mx:2,borderRadius: '5%'}}>
      <CardActionArea>
        <CardMedia sx={{ mx:1, width: 320, p:4 }}
          component="img"
          width='30'
          height='200'
          image={props.Image}
          alt="green iguana"
          
        />
        <Box sx={{ display: "flex", gap: 1.5, mt: "auto", mx:4 }}>
        <Link
              href="#dribbble-shot"
              level="body3"
              underline="none"
              startDecorator={<Favorite />}
              sx={{
                color: "#fffb5c",
                fontWeight: "md",
                ml: "auto",
                "&:hover": {color:'red'},
              }}
            ></Link>
            <Link onClick={handleToggle}
              href="#dribbble-shot"
              level="body3"
              underline="none"
              startDecorator={<AddShoppingCartIcon />}
              sx={{
                color: "#fffb5c",
                fontWeight: "md",
                "&:hover": {color:'#FFFBF3'},
              }}
            ></Link>
            </Box>
        <CardContent sx={{mx:4}}>
          <Typography fontFamily='poppins' gutterBottom variant="h4" component="div">
            {props.Title}
          </Typography>
          <Typography fontFamily='poppins' variant="h6" color="black">
           {props.price + " " + "€"}
          </Typography>
          <Typography fontFamily='poppins' variant="h6" color="black">
           {props.size}
          </Typography>
          <Link to="/From"><Typography fontFamily='poppins' variant="body2" color="black">
           {props.seller}
          </Typography></Link>
          <Typography fontFamily='poppins' variant="body2" color="black" height="15vh">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Card>
  );
}