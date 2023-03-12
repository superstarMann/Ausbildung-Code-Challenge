import React,{useEffect, useState} from 'react';
import { MyTable } from "../components/Mytable";
import styled from 'styled-components';
import * as book from '../components/library'
import { FileUpload } from '../components/FileUpload';

const MainContainer = styled.div`
width: 70%;
height: 100vw;
display: flex;
flex-direction: column;
align-items: center;
color: #ecf0f1;
`

const Label = styled.label`
width: 80%;
height: 50px;
display: flex;
justify-content: space-between;
height: center;
`

const FileButton = styled.div`
  margin-left: 60px;
  color: black;
  width: 40%;
  height: 30px;
  padding: 20px 0px;
  background: #fff;
  border: 1px solid rgb(77,77,77);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgb(77,77,77);
    color: #fff;
  }
`
const Geldbox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Input = styled.input`
display: none;
`

const csvObjectDefault = {
  csv: [
    ["", "2010", "2011", "2012", "2013", "2014", "2015"],
    ["Ford", 10, 11, 12, 13, 14, 15],
    ["Volvo", 20, 11, 14, 13, 14, 15],
    ["Toyota", 30, 15, 12, 13, 14, 15],
    ["Bmw", 20, 16, 21, 32, 12, 23, 12],
    ["Hundai", 40, 16, 21, 32, 12, 23, 12],
    ["Auto", 40, 16, 21, 32, 12, 23, 12],
    ["Auto", 40, 16, 21, 32, 12, 23, 12],
    ["Auto", 40, 16, 21, 32, 12, 23, 12],
    ["Auto", 40, 16, 21, 32, 12, 23, 12],
  ]
}  

export const Main = () => {
    const [csvObject, setCsvObject] = useState(csvObjectDefault);
    const [number , setNumber] = useState(0);
    
    return(
        <MainContainer>
            <Label for="file">
              <div></div>
            <FileButton onClick={() => setNumber(number + 0.1)}>UPLOAD CSV</FileButton>
            <Geldbox>{`${number} Euro`}</Geldbox>
            </Label>
                <Input 
                name='file'
                id='file'
                type="file" 
                accept=".csv" 
                placeholder={`hi`}
                onChange={(e) => book.handleUpload(e, setCsvObject)}
                />
                <FileUpload setCsvObject={setCsvObject}/>
                <MyTable csvFile={csvObject}/>
        </MainContainer>
    )
  }
  
  