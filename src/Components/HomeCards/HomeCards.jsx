import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from "../../../src/Assest/unsplash.jpg";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import "@fontsource/poppins";
import "./HomeCards.css"

export default function CardsHome(props) {
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Box   sx={{ boxShadow: 4, p:16, m:'auto', width:'30%', minHeight: 350 }}>
      <Card class='box' elevation={3}
        
        sx={(theme) => ({
          bgcolor: 'RGB(117, 44, 160, 0.85)',
          width: 300,
          gridColumn: "span 2",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "hidden",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 200,
          }}
        >
          <AspectRatio
            variant="soft"
            sx={{
              "--AspectRatio-paddingBottom":
                "clamp(0px, (100% - 200px) * 999, 250px)",
              pointerEvents: "none",
            }}
          >
            <img alt="" src={props.Image} />
          </AspectRatio>
          <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
            <div>
              <Typography fontFamily='poppins'  textColor='white' fontWeight="lg" level="body2">
                {props.Titel}
              </Typography>
              <Typography fontFamily='poppins' textColor='white' level="body2">{props.Paragraf}</Typography>
              
            </div>
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
        </Box>
      </Card>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
