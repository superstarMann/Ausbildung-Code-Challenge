import React from 'react';

//이부분은 몰라
const DELIMITER = ',';
const APOSTROPHE = '"';

export const handleOnDragOver = (e, setState) => {
    e.preventDefault();
    console.log(`Over`);
    setState(true);
    return false;
}

export const handleOnDrop = (e, setState, setCsvObject) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0]
    let fileReader = new FileReader();
    fileReader.readAsText(file, 'utf-8');
    fileReader.onload = function () {
        parsingCsv(fileReader.result, setCsvObject);
        console.log(fileReader.result);
        return;
    }
    setState(false);
    return false;
}

export const handleUpload = (e, setCsvObject) => {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file, "utf-8");
    fileReader.onload = function () {
        parsingCsv(fileReader.result,setCsvObject)        
    };
}


// 이부분은 몰라서 코드를 그대로 복사했습니다. 찾은 과정에서 해당 코드를 찾아냈다.
export const mySplit = (line, delimiter, ignore) => {
    let spt = [];
    let tmp = "";
    let flag = false;
  
    for(let i = 0; i < line.length; i++)
    {
      if(ignore === line[i] && flag === true) 
      {
        flag = false;
        continue;
      }
      else if(ignore === line[i])
      {
        flag = true;
        continue;
      } 
      
      if(line[i] === delimiter && flag === false) {
        spt.push(tmp);
        tmp = "";
  
        continue;
      }
  
      tmp += line[i];
    }
  
    spt.push(tmp);
  
    return spt;
  }
  

export const parsingCsv = (file, setCsvObject) => {
  let height, width;
  let obj = {
    HEIGHT: 0,
    WIDTH: 0,
    csv: [],
  };

  obj.csv = [];

  let sptLine = file.split(/\r\n|\n/);
  console.log(sptLine);

  height = 0;
  for(let line of sptLine)
  {
    if(line === "") continue;
    let spt = mySplit(line, DELIMITER, APOSTROPHE);
    obj.csv.push(spt);
    height++;
  }

  width = obj.csv[0].length;
  obj.HEIGHT = height;
  obj.WIDTH = width;

  setCsvObject(obj);

  return;

}