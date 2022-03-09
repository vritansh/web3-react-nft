import React from 'react'

const Main = () => {
  return (
    <div>
        <div className="maincontent">
           <div className='punkHighlight'>
               <div className='punkContainer'>
                    <img className='selectedPunk' 
                        src={activePunk.image_url}
                        alt=''
                    />
               </div>
           </div>
           
           <div className='punkDetails' style ={{color: '#fff'}}>
                <div className='title'>
                    
                </div>
           </div>
        </div>
    </div>
  )
}

export default Main