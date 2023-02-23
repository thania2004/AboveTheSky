// import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Box from "@mui/joy/Box";
// import Card from "@mui/joy/Card";
// import Typography from "@mui/joy/Typography";
// import Link from "@mui/joy/Link";
// import Favorite from "@mui/icons-material/Favorite";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Image from "../../../src/Assest/unsplash.jpg";
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
// import "@fontsource/poppins";
// import "./HomeCards.css"

// export default function CardsHome(props) {
//     const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };
//   return (
//     <Box   sx={{ boxShadow: 4, p:16, m:'auto', width:'30%', minHeight: 350 }}>
//       <Card class='box' elevation={3}
        
//         sx={(theme) => ({
//           bgcolor: 'RGB(117, 44, 160, 0.85)',
//           width: 300,
//           gridColumn: "span 2",
//           flexDirection: "row",
//           flexWrap: "wrap",
//           overflow: "hidden",
//           gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
//           transition: "transform 0.3s, border 0.3s",
//           "&:hover": {
//             borderColor: theme.vars.palette.primary.outlinedHoverBorder,
//             transform: "translateY(-2px)",
//           },
//           "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
//         })}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             maxWidth: 200,
//           }}
//         >
//           <AspectRatio
//             variant="soft"
//             sx={{
//               "--AspectRatio-paddingBottom":
//                 "clamp(0px, (100% - 200px) * 999, 250px)",
//               pointerEvents: "none",
//             }}
//           >
//             <img alt="" src={props.urlImage} />
//           </AspectRatio>
//           <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
//             <div>
//               <Typography fontFamily='poppins'  textColor='white' fontWeight="lg" level="body2">
//                 hola
//               </Typography>
//               <Typography fontFamily='poppins' textColor='white' level="body2">hola</Typography>
              
//             </div>
//             <Link
//               href="#dribbble-shot"
//               level="body3"
//               underline="none"
//               startDecorator={<Favorite />}
//               sx={{
//                 color: "#fffb5c",
//                 fontWeight: "md",
//                 ml: "auto",
//                 "&:hover": {color:'red'},
//               }}
//             ></Link>
//             <Link onClick={handleToggle}
//               href="#dribbble-shot"
//               level="body3"
//               underline="none"
//               startDecorator={<AddShoppingCartIcon />}
//               sx={{
//                 color: "#fffb5c",
//                 fontWeight: "md",
//                 "&:hover": {color:'#FFFBF3'},
//               }}
//             ></Link>
            
//           </Box>
//         </Box>
//       </Card>
//       <Backdrop
//         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={open}
//         onClick={handleClose}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </Box>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "@mui/joy/Link";
import "@fontsource/poppins";
import Favorite from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/joy/Box";

export default function ActionAreaCard(props) {
    const [open, setOpen] = React.useState(false);
      const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
  return (
    <Card spacing={4} elevation={3} sx={{bgcolor: 'RGB(117, 44, 160, 0.85)', maxWidth: 400,mx:2,borderRadius: '5%', }}>
      <CardActionArea>
        <CardMedia sx={{ mx:1, width: 320, p:4 }}
          component="img"
          width='30'
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
        <CardContent sx={{mx:4,}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.price + " " + "€"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.size}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
