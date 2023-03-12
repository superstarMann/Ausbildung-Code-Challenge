import React from 'react';
import styled from 'styled-components';

const Headerbox = styled.header`
width: 100%;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
color: black;
margin-bottom: 50px;
color: #ecf0f1;
font-size: 2em;
box-shadow: 5px 2px 18px #2f3542;
`

export const Header = () => {
    return(
        <Headerbox>
            <p>PUT IN CSV 👇</p>
        </Headerbox>
    )
}