import React, {useState, useRef} from 'react';
import { useLocation, Link } from 'react-router-dom';
import mystyle from './mystyle.css';


export default function Edit(props) {
    const location = useLocation()
//   const { from } = location.state
 var vg= location.state.id;
 var vg1= location.state.height;
 var vg2= location.state.width;
 var vg3= location.state.username;
 
 const[oldd,newsts]=useState(vg);
 const[oldd1,newsts1]=useState(vg1);
 const[oldd2,newsts2]=useState(vg2);
 

 const[ndx,ndd]=useState();

 const ref=useRef(null);

 const handleClick=()=>{
    ndd(true);
    ref.current.focus();
    
 }

  return (
    
    <div className='nj h-full w-full flex flex-col ' >
    
    <div className='mj w-full h-20  '><Link to="/navbar">Back</Link></div>

    

<div className='ml h-96  bg-white flex  items-center justify-center  flex-row flex-wrap    w-100' >
    


<div className='co1 w-[calc(100%_-_10%)] flex flex-col gap-5 '>
<div className='d1 w-full h-fit flex gap-4 items-center' >
    <div className='nk rounded-full w-11 h-11 bg-black text-white flex justify-center items-center'>A</div>
    <h1>
        Edit Values
    </h1>

</div>

<div className='d1 w-full h-fit' >
<p>Username</p>
    {/* <input className='i1 w-full' type="text" value={oldd} ref={ref}  readOnly={!ndx}   onChange={(e)=>{newsts(e.target.value)}} name="" id="input-box" style={{border:'1px solid black'}} /> */}
    <input className='i1 w-full' type="text" value={oldd}    onChange={(e)=>{newsts(e.target.value)}} name="" id="input-box" style={{border:'1px solid black'}} />

</div>
<div className='d1 w-full h-fit flex gap-4' >

 

   <div className='d11 w-[calc(100%_-_50%)]'>
    <p>Email</p>

    <input className='i1 w-full' type="text" value={oldd2}     onChange={(e)=>{newsts2(e.target.value)}} name="" id="input-box" style={{border:'1px solid black'}} />
   </div>

   <div className='d11 w-[calc(100%_-_50%)] '>
<p>Email</p>
    <input className='i1 w-full' type="text" value={oldd1}    onChange={(e)=>{newsts1(e.target.value)}} name="" id="input-box" style={{border:'1px solid black'}} />
   </div>

</div>
<div className='d1 w-full h-fit'>
<div className='endd  w-full flex justify-end '>
        <div className='bh w-28 h-8 bg-slate-600 text-white text-center mr-2' onClick={handleClick}>Update</div>
        <Link to="/navbar"><div className='bh w-fit h-8 px-3  text-center' onClick={()=>{ndd(false)}} style={{border:'1px solid black'}}>Cancel</div></Link>
    </div>
</div>
        
    
   </div>
   </div>

    </div>
  );
}
