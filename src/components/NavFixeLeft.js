import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

    const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    
    li,a{
        list-style-type: none;
        margin-top: 20px;
        color: white;
        text-decoration: none;
        :hover {
            color: black;
        }
    }
`
const NavFixeLeft = () => {
    
    return (
        <Grid sm={4} md={2} sx={{backgroundColor:"#1976d2", height:"100vh"}}>
            <Ul>
            <Avatar sx={{ width: 120, height: 120,marginTop:"100px"}} alt="logo poisson" src="https://img.freepik.com/vecteurs-libre/logo-poisson-silhouette-saut-eau_23987-31.jpg?size=338&ext=jpg" />
            <Link to ="/home"><li>Ajouter un produit</li></Link>
            <Link to ="/categorie"><li>Ajouter une catégorie</li></Link>
            <Link to ="/modif"><li>Modifier un produit</li></Link>
            <Link to =""><li>Voir tous les produit</li></Link>
            <Link to =""><li>voir les commandes </li></Link>
            <Link to ="/facture"><li>voir les factures client</li></Link>
            </Ul>
        </Grid>  
        
    );
};

export default NavFixeLeft;