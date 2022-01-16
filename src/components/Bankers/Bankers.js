import React, { useEffect, useState } from 'react';
import Banker from '../Banker/Banker';
import Cart from '../Cart/Cart';
import './Bankers.css';


const Bankers = () => {
    const [bankers,setBankers]=useState([])
    const [click,setClick]=useState([])
    useEffect(()=>{
        fetch('./banker.JSON')
        .then(res =>res.json())
        .then(data => setBankers(data))
    },[])
    const handleClick=banker=>{
      
       const newClick=[...click,banker];
    //    console.log(newClick.length)
       setClick(newClick);
    }
    return (
        <div className='bankers'>
            <div className='single-bank'>
            {
              bankers.map(banker=><Banker banker={banker} key={banker.id} handleClick={handleClick}></Banker>)
            }
            </div>
            <div>
                {/* <h5>order:{click.length} </h5> */}
                <Cart click={click}></Cart>
            </div>
        </div>
    );
};

export default Bankers;