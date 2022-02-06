import React from 'react';
import NavFixeLeft from '../components/NavFixeLeft';
import Box from '@mui/material/Box';
import Categorie from '../components/forms/Categorie';

const CategoriePage = () => {
    return (
        <Box sx={{display:"flex"}} >
            <NavFixeLeft/>
            <Categorie/>
        </Box>
    );
};

export default CategoriePage;