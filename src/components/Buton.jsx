import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Buton = ({text, type}) => {
    return (
        <div>
            <Stack sx={{mt:10}}>
                
                <Button variant="contained" type={type}>{text}</Button>
                
            </Stack>
        </div>
    );
};

export default Buton;