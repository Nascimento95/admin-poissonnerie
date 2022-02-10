import React from 'react';
import Grid from '@mui/material/Grid';
import Input from '../Input';
import Buton from '../Buton';
import { useFormik } from 'formik';
import postCategorie from '../../api/postCategorie'

const Categorie = () => {

    const formik = useFormik({
        initialValues: {
        name: "",
        image:"",
        products:[],
        },
        onSubmit: values => {
            postCategorie(values)
            formik.resetForm();
        },
    });
    //console.log(formik.values);
    return (
        <Grid component="form" onSubmit={formik.handleSubmit} sm={8} md={10} sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",ml:2, mr:2}}>
            <Grid>
                <h1>Ajouter une categorie</h1>
                <Input 
                    label="Nom" 
                    name="name" 
                    change={formik.handleChange} 
                    valeur={formik.values.name} 
                />
                <Input
                    label="Image URL"  
                    name="image"
                    change={formik.handleChange} 
                    valeur={formik.values.image} 
                />
                <Input
                    label="Produit" 
                    name="products"
                    change={formik.handleChange} 
                    valeur={formik.values.products} 
                />
                <Buton text="Ajouter" type="submit"/>
            </Grid>
        </Grid>
    );
};

export default Categorie;