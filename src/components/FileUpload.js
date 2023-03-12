import React, { useState } from 'react';
import styled from 'styled-components';
import * as book from './library'

const DragBox = styled.div`
   margin-top: 50px;
   border: 3px dashed #ecf0f1;
   width: 80%;
   height: 20%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const FileUpload = ({setCsvObject}) => {
    const [dropFlag, setDropFlag] = useState(false);

    return(
        <DragBox 
            onDrop={(e) => book.handleOnDrop(e, setDropFlag, setCsvObject)}
            onDragOver={(e) => book.handleOnDragOver(e, setDropFlag)}
        >
        <p>Drag & Drop</p>
        </DragBox>
    )
}