import React, { useEffect } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css';
import { useState } from 'react';

const Main = ({selectedPunk, punkListData}) => {
    const [ activePunk, setActivePunk] = useState(punkListData[0]);
    
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [punkListData, selectedPunk])

return (
    


    <div className="main">
        <div className="mainContent">
           <div className='punkHighlight'>
               <div className='punkContainer'>
                    <img className='selectedPunk' 
                        src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q"
                        alt=''
                    />
               </div>
           </div>
           
           <div className='punkDetails' style ={{color: '#fff'}}>
                <div className='title'> Bandana Punk </div> 
                <span className="itemNumber"> </span>                
           </div>
           <div className="owner">
               <div className="ownerImageContainer">
                    <img 
                    src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q"
                      
                    />
               </div>
               <div className="ownerDetails">
                    <div className='ownerNameAndHandle'>
                        <div> 0xe2rwerwerwerwerwrwr </div>
                        <div className="ownerHandle"> 
                            @Vk
                        </div>
                        <div className="ownerLink">
                            <img src ={instagramLogo} alt ='' /> 
                        </div>
                        <div className="ownerLink">
                            <img src ={twitterLogo} alt ='' /> 
                        </div>
                        <div className="ownerLink">
                            <img src ={moreIcon} alt ='' /> 
                        </div>
                    </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Main