import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '../../Components/Form/Form.css'
import Input from '@mui/joy/Input';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const contacto = () => {
  return (
    <form
      class='mi-formGen'
      id="mi-form"
      action="https://formspree.io/f/xrgjwbog"
      method="POST"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{ color: "white", bgcolor: 'RGB(117, 44, 160, 0.85)', height:900}}
      >
        <Stack direction="row"  spacing={8}  sx={{fontSize: '1.5rem',}}>
          <Stack sx={{ mx:1,}} >Email:</Stack>
          <Input sx={{ width: 400, bgcolor:'white', color:'grey',}}
            color="neutral"
            size="lg"
            variant="outlined"
            type="email"
            name="email"
            placeholder="Escribe tu Email aquí!."
          />
        </Stack>
        <Stack direction="row" spacing={4} >
          <Stack  sx={{ mx:1, fontSize: '1.5rem'}} >Mensaje:</Stack>
          <TextareaAutosize
            rows="5"
            name="message"
            id="message"
            placeholder="Escribe tu mensaje aquí!."
            required=""
            maxRows={4}
            style={{ width: 400, height:200 , borderRadius: '10px', fontSize: '1.2rem' }}
          />
        </Stack>
        <button class='button accept-btn'>Enviar</button>
      </Stack>
    </form>
  );
};

export default contacto;
