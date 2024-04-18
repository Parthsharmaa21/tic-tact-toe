

import './App.css';
import React, { useEffect, useState } from "react";

function App () {
 const [mark,setMark]=useState(['X',null,null,null,null,null,null,null,null]);
 const[flag,setFlag]=useState(true);
 const[Winner,setWinner]=useState(false);
 function markChangeHandler(idx){
  let newMark=[...mark];
  if(mark[idx]==null){
  newMark[idx]=flag?'X':'0';
  setFlag(!flag);
  setMark(newMark);
  }
 }

//  const [mark2,setMark2]=useState(null);
//  const [mark3,setMark3]=useState(null);
//  const [mark4,setMark4]=useState(null);
//  const [mark5,setMark5]=useState(null);
//  const [mark6,setMark6]=useState(null);
//  const [mark7,setMark7]=useState(null);
//  const [mark8,setMark8]=useState(null);
//  const [mark9,setMark9]=useState(null);
//  const [flag,setFlag]  =useState(true)

//  function mark1ChangeHandler(){
//   if(flag==true){
//     setMark1("X")
//     setFlag(false)
//   }else{
//     setMark1('O')
//     setFlag(true)
//   }
//  }

//  function mark2ChangeHandler(){
//   if(flag==true){
//   setMark2("X")
//   setFlag(false)
// }else{
//   setMark2('O')
//   setFlag(true)
// }}

// function mark3ChangeHandler(){
//   if(flag==true){
//     setMark3("X")
//     setFlag(false)
//   }else{
//     setMark3('O')
//     setFlag(true)
// }}

// function mark4ChangeHandler(){
//   if(flag==true){
//     setMark4("X")
//     setFlag(false)
//   }else{
//     setMark4('O')
//     setFlag(true)
// }}

// function mark5ChangeHandler(){
//   if(flag==true){
//     setMark5("X")
//     setFlag(false)
//   }else{
//     setMark5('O')
//     setFlag(true)
// }}
// function mark6ChangeHandler(){
//   if(flag==true){
//     setMark6("X")
//     setFlag(false)
//   }else{
//     setMark6('O')
//     setFlag(true)
// }}

// function mark7ChangeHandler(){
//   if(flag==true){
//     setMark7("X")
//     setFlag(false)
//   }else{
//     setMark7('O')
//     setFlag(true)  
// }}

// function mark8ChangeHandler(){
//   if(flag==true){
//     setMark8("X")
//     setFlag(false)
//   }else{
//     setMark8('O')
//     setFlag(true)
// }}

// function mark9ChangeHandler(){
//   if(flag==true){
//     setMark9("X")
//     setFlag(false)  
//   }else{
//     setMark9('O')
//     setFlag(true)
// }}
  return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <div classname = "board">
    <div>
    <button onClick={markChangeHandler(0)} style={{width:"75px",height:"75px"}}>{mark[0]}</button>
    <button onClick={markChangeHandler(1)} style={{width:"75px",height:"75px"}}>{mark[1]}</button>
    <button onClick={markChangeHandler(2)} style={{width:"75px",height:"75px"}}>{mark[2]}</button>
    </div>

    <div>
    <button onClick={markChangeHandler(3)} style={{width:"75px",height:"75px"}}>{mark[3]}</button>
    <button onClick={markChangeHandler(4)} style={{width:"75px",height:"75px"}}>{mark[4]}</button>
    <button onClick={markChangeHandler(5)} style={{width:"75px",height:"75px"}}>{mark[5]}</button>
    </div>

    <div>
    <button onClick={markChangeHandler(6)} style={{width:"75px",height:"75px"}}>{mark[6]}</button>
    <button onClick={markChangeHandler(7)} style={{width:"75px",height:"75px"}}>{mark[7]}</button>
    <button onClick={markChangeHandler(8)} style={{width:"75px",height:"75px"}}>{mark[8]}</button>

    </div>
    </div>
    <h1>Winner:{winner==false? {}</h1>
    </>

  );
}

export default App;
