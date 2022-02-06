import React from 'react';
import FormAjouter from '../components/FormAjouter';
import NavFixeLeft from '../components/NavFixeLeft';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <Box sx={{display:"flex",justifyContent:"center", alignItems:"center",}}>
            <NavFixeLeft/>
            <FormAjouter/>
        </Box>
    );
};

export default Home;