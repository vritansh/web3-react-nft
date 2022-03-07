import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectinCard = ({id, name, traits, image}) => {
    
console.log(image);
  return (
     
        <div className="collectionCard">
            <img src={image} />
            <div className='details'>
            <div className='name'>
                {name} <div className='id'> .#{id} </div>
            </div> 
            </div>
            <div className='priceContainer'>
                <img src ={weth} className='wethImage' alt=''/>
                 <div className='price'> { traits[0] ?.value }</div>
            </div>
  
        </div>
  )
}

export default CollectinCard