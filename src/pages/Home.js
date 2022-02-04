import React from 'react';
import FormAjouter from '../components/FormAjouter';
import NavFixeLeft from '../components/NavFixeLeft';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Home = () => {
    const ContainerHome = styled.div`
        display: flex;
    `
    return (
        <Box container sx={{display:"flex"}}>
            <Grid item  sx={{border:"6px solid",}}>
                <NavFixeLeft/>
            </Grid>
            <Grid item md={10} sx={{ml:2,mr:2}}>
                <FormAjouter/>
            </Grid>
        </Box>
        
    );
};

export default Home;