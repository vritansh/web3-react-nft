import React from 'react'
import CollectinCard from './CollectinCard'
import './PunkList.css'

const PunkList = ({punkListData, setSelectecPunk } ) => {
    console.log(punkListData)
  return (

    <div className='punkList'>
            { 
                punkListData.map(punk => (
                        <div onClick ={ ()=> setSelectecPunk(punk.token_id)}>
                            <CollectinCard
                                key ={punk.token_id}
                                id={punk.token_id}
                                name={punk.name}
                                traits={punk.traits}
                                image={punk.image_url}
                            />
                        </div>  
                    
                ))
            }

    </div>
  )
}

export default PunkList