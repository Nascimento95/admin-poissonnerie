import React from 'react';
import TextField from '@mui/material/TextField';
import Buton from '../components/Buton';
import { useFormik } from 'formik'
import styled from 'styled-components';
import PostProduct from '../api/PostProduct'
import InputSelect from '../components/InputSelect'
const ContainerForm = styled.div`
    width: 100%;
    margin: 00px 50px 0px 0px;
    height: 100vh;
    h1{
        text-align: center;
        margin:50px 0px 50px 0px;
    }
`
const FormAjouter = () => {

    const formik = useFormik({
        initialValues: {
            name:"",
            image:"",
            characteristic:"",
            kiloPrice: "",
            pricePerPiece: "",
            netWeight: "",
            conditioning:"",
            fishingArea :"",
            categories:[],
            // available:false,
        },
        validateOnChange:false,
        onSubmit: values => {
            PostProduct(values)
            formik.resetForm();
        },
    });
    console.log("mon formik",formik.values.categories);
    //   console.log(formik.values.name);
    return (
        <ContainerForm>
            <h1>Ajouter un produit sur le site </h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField sx={{mx:2, mt:2}}
                    required
                    id="name"
                    label="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}

                />
                <TextField sx={{mx:2, mt:2}} 
                    id="characteristic"
                    label="characteristic" 
                    name="characteristic"
                    type="text"    
                    onChange={formik.handleChange}
                    value={formik.values.characteristic}
                />
                <TextField sx={{mx:2, mt:2}}  
                    label="kiloPrice" 
                    name="kiloPrice"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.kiloPrice}
                />
                <TextField sx={{mx:2, mt:2}}  
                    label="pricePerPiece" 
                    name="pricePerPiece"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.pricePerPiece}
                />
                <TextField sx={{mx:2, mt:2}}  
                    label="netWeight" 
                    name="netWeight"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.netWeight}
                />
                <TextField sx={{mx:2, mt:2}}  
                    label="conditioning"
                    name="conditioning"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.conditioning} 
                />
                {/* <TextField sx={{mx:2, mt:2}}  
                    label="categories"
                    name="categories"
                    type="categories"
                    onChange={formik.handleChange}
                    value={formik.values.categories} 
                /> */}
                <TextField sx={{mx:2, mt:2}}  
                    label="image" 
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                <TextField sx={{mx:2, mt:2}}  
                    label="fishingArea" 
                    name="fishingArea"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fishingArea}
                />
                {/* <TextField sx={{mx:2, mt:10}}  
                    label="available" 
                    name="available"
                    type="checkbox"
                    onChange={formik.handleChange}
                    value={`${formik.values.available}`}
                /> */}
                <InputSelect 
                    values={formik.values.categories}
                    change={formik.handleChange}
                    name="categories"
                />
                <Buton text="valider" type="submit"/>
            </form>
        </ContainerForm>
    );
};

export default FormAjouter;