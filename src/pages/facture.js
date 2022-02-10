import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NavFixeLeft from '../components/NavFixeLeft';
import TableFacture from '../components/TableFacture'
function Facture() {
    return (
        <Box sx={{display:"flex"}}>
            <NavFixeLeft/>
            <Grid sm={10} sx={{border:"1px black solid",ml:2, mr:2, textAlign:"center"}}>
                <h1>Toutes les Facture clients</h1>
                <TableFacture/>
            </Grid>
            
        </Box>
    )
}

export default Facture
