import React from 'react';
import styled from 'styled-components';

const FContainer = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: space-around;
`

const EmailBox = styled.div`
display: none;
`


export const Footer = () => {
    return(
        <FContainer>
            <div></div>
            <div></div>
            <EmailBox>lsh94503@gmail.com</EmailBox>
        </FContainer>
    )
}