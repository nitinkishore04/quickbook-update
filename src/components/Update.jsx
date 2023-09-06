import React from 'react';
import Box from "@mui/material/Box";
import { TextField } from '@mui/material';

function Update(props) {
  return (
    <Box 
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        //   value={props.companyName}
        />


    </Box>
  )
}

export default Update