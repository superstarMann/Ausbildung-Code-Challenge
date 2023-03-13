import React, {useEffect} from 'react';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';
import styled from 'styled-components';
import { Graph } from './Graph';

let myTable;
const hotKey = "non-commercial-and-evaluation"

const CsvBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`

const ExportBtn = styled.button`
  color: black;
  width: 40%;
  height: 30px;
  padding: 20px 50px;
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
  margin: 20px 0;
`

const ChartBox = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 10px;
`

const init = (csvFile) => {
    const container = document.getElementById('hot-app');
    myTable = new Handsontable(container, {
        data: csvFile.csv,
        colHeaders: true,
        rowHeaders: true,
        licenseKey: hotKey,
        width:"400",
        height:"250",
    })    
}

const csvDownload = () => {
    const exportPlugin = myTable.getPlugin("exportFile");
    exportPlugin.downloadFile("csv", { filename: "MyFile" });
  };
  
export const MyTable = ({csvFile}) => {
  useEffect(() =>{
    init(csvFile)
  },[csvFile])

    return(
    <div>
    <CsvBox>
      <ExportBtn onClick={csvDownload}>DOWNLOAD</ExportBtn>
      <ChartBox>
      <div id='hot-app'/>
      <Graph csvFile={csvFile}/>
      </ChartBox>
     </CsvBox>
    </div>
    )
}