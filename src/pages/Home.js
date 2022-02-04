import React from 'react';
import FormAjouter from '../components/FormAjouter';
import NavFixeLeft from '../components/NavFixeLeft';
import styled from 'styled-components'

const Home = () => {
    const ContainerHome = styled.div`
        display: flex;
    `
    return (
        <ContainerHome>
            <NavFixeLeft/>
            <FormAjouter/>
        </ContainerHome>
    );
};

export default Home;