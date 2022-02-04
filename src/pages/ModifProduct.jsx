import React, {useState, useEffect} from 'react';
import NavFixeLeft from '../components/NavFixeLeft';
import getProduct from '../api/getProduct';
import Card from '../components/Card'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
`
const ContainerCard = styled.div`
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
`
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
        <Container>
            <NavFixeLeft/>
            <ContainerCard>
                {products.map((product,index) =>
                    <Link to={`/modif/${product._id}`}>
                        <Card key={`${product.name}${index}`}
                            image={product.image}
                            name={product.name}
                            prixKilo={product.kiloPrice}
                            poid={product.netWeight}
                            width={300}
                            height={200}
                        />
                    </Link>
                )}
            </ContainerCard>
        </Container>
    );
};

export default ModifProduct;