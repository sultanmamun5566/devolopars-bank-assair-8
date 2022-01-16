import React from 'react';
import './Banker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Banker = (props) => {

    const {img,name,post,Telephone,email,fax}=props.banker;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='banker'>
            <div ><img src={img} alt="" /></div>
          
          <div >
          <h4>Name:  {name}</h4>
          <p>Post:   {post}</p>
          <em>email:{email}</em>
          <p>Phone:    {Telephone}</p>
          <p>Fax:   {fax}</p>
          
            <button onClick={()=> props.handleClick(props.banker)} className='btn'>  {element} <span className='btn-span'>Add To Cart</span></button>
          </div>
        </div>
    );
};

export default Banker;