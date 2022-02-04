import React from 'react';
import NavFixeLeft from '../components/NavFixeLeft';
import Box from '@mui/material/Box';
import Categorie from '../components/forms/Categorie';
import Grid from '@mui/material/Grid';

const CategoriePage = () => {
    return (
        <Box>
            <Grid sx={{display:"flex",border:"1px solid"}}>
                <NavFixeLeft/>
                <Categorie/>
            </Grid>
            <Grid sx={{display:"flex",border:"1px solid",justifyContent:"center",alignItems:"center"}}>
                <Grid sm={6} sx={{border:"1px solid",textAlign:"center"}} >
                    <p>les categorie</p>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoriePage;