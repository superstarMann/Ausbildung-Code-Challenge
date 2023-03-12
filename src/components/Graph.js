import React from 'react';
import styled from 'styled-components';
import {Chart} from 'react-google-charts';

const GraphContainer = styled.div`
width: 100%;
height: 100%;
`
const options = {
  title: "Chart Title",
  
}

/* Example
const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
*/

export const Graph = ({csvFile}) => {
  
    return(
        <GraphContainer>
            <Chart
            data={csvFile.csv}
            options={options}
            chartType="Bar"
            width="100%"
            height="250px"
            />
        </GraphContainer>
    )
}

