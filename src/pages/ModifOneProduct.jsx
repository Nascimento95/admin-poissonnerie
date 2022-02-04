import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card'
import NavFixeLeft from '../components/NavFixeLeft';
import ModalModif from '../components/ModalModif'
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    /* border:solid black 1px; */
`
const DivCard = styled.div`
    display: flex;
    justify-content: center;
    /* border:solid black 1px; */
    width: 800px;
`
const DivModal = styled.div`
    display:flex;
    width: 200px;
    height: 100vh;
    /* border:solid black 1px; */
    justify-content:center;
    align-items: center;
`
const ModifOneProduct = () => {
        
    const {id} = useParams()
    const [ fish , setFish] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
         .then(response => response.json())
         .then(data => setFish(data))
    },[])

    if(!fish){
        return <p>Chargement ...</p>
    }
    console.log(fish);
    return (
        <Container>
            <NavFixeLeft/>
            <DivCard>
                <Card
                    image={fish.image}
                    name={fish.name}
                    poid={fish.netWeight}
                    prixKilo={fish.kiloPrice}
                    prixPiece={fish.pricePerPiece}
                    width={600}
                    height={300}
                />
            </DivCard>
            <DivModal>
                <ModalModif 
                    idProduit={id}/>
            </DivModal>
        </Container>
    );
};

export default ModifOneProduct;