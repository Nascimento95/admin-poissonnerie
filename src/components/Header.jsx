import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
const Header = () => {

    return (
        <Box sx={{ width: '100%' , bgcolor: 'primary.main', display: 'flex', justifyContent: 'flex-end'}}>
            <Tabs
                // onChange={handleChange}
                // value={value}
                aria-label="Tabs where each tab needs to be selected manually"
            >
                <Tab sx={{color: 'white'}} label="Ajoutez un produit" />
                <Tab sx={{color: 'white'}} label="Modifier un produit" />
                <Tab sx={{color: 'white'}} label="Voir les commande" />
            </Tabs>
        </Box>
    );
};

export default Header;