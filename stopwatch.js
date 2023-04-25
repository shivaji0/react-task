import React, { useEffect, useState } from 'react'

function Stopwatch() {
  const [second,setSecond]= useState(0);
  const [minute,setMinute] = useState(0);
  const [running,setRunning] = useState(false);
  const [res,setRes] = useState(false);
   var time=0;
   
   function starting(){
    setRunning(true);
   }
   function resuming(){
    setRes(!res);
   }
   useEffect(()=>{
   
  if(running===true && res===false){
    time =setInterval(()=>{
    setSecond(second+1);
    if(second===59){
      setSecond(0);
      setMinute(minute+1);
    }
  },1000);
  }
  else if(res===true){
     setSecond(second);
   setMinute(minute);
  }
  return  ()=>clearInterval((time));
    
   });
    
   function Reset(){
    setMinute(0);
    setSecond(0);
    setRes(false);
    setRunning(false);
    
   }

  return (
    <div className=''>
      <div className='p-2'>{minute}:{second} </div>
      {running===true? <button className='bg-gray-400 px-3 m-2'   onClick={resuming} >Resume</button>: <button className='bg-gray-400 px-4  m-2' onClick={starting}>Start</button>}
   
    
      <button className='bg-gray-400  px-5'  onClick={Reset}>   Reset</button>

    </div>
  )
}

export default Stopwatch;