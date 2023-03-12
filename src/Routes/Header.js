import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../img/Logo.png';

const Headerbox = styled.header`
padding-left: 20px;
width: 100%;
height: 150px;
display: flex;
justify-content: left;
align-items: center;
color: black;
margin-bottom: 50px;
color: #ecf0f1;
font-size: 1.2em;
box-shadow: 5px 2px 18px #636e72;
`

const Logo = styled.img`
width: 50px;
height: 50px;
`

export const Header = () => {
    return(
        <Headerbox> 
            <Logo src={LogoSrc}/>
        </Headerbox>
    )
}