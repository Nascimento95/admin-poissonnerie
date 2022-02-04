import React from 'react';
import TextField from '@mui/material/TextField';
const Input = ({ label, name, change, valeur}) => {
    return (
        <>
            <TextField 
                label={label} 
                name={name}
                variant="outlined"
                sx={{ml:1}}
                onChange={change}
                value={valeur}
            />
        </>
    );
};

export default Input;