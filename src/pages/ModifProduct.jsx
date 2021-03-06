import React, {useState, useEffect} from 'react';
import NavFixeLeft from '../components/NavFixeLeft';
import getProduct from '../api/getProduct';
import Card from '../components/Card'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from 'styled-components';

const ModifProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProduct(setProducts)
    },[])
    console.log(products);
    if (!products) {
        return <p>Chargement ...</p>
    }
    return (
        <Box sx={{display:"flex"}}>
            <NavFixeLeft/>
            <Grid sm={10} sx={{ display:"flex",flexDirection:"row",flexWrap:'wrap', justifyContent:"space-around", height:"100vh",overflow:"scroll",pt:10,ml:2,mr:2,}}>
                {products.map((product,index) =>
                    <Link style={{textDecoration: 'none' }} to={`/modif/${product._id}`}>
                        <Card  key={`${product.name}${index}`}
                            image={product.image}
                            name={product.name}
                            prixKilo={product.kiloPrice}
                            poid={product.netWeight}
                            prixPiece={product.pricePerPiece}
                            width={300}
                            height={200}
                        />
                    </Link>
                )}
            </Grid>
        </Box>
    );
};

export default ModifProduct;