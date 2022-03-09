import React from 'react'
import CollectinCard from './CollectinCard'
import './PunkList.css'

const PunkList = ({punkListData}) => {
    console.log(punkListData)
  return (

    <div class='punkList'>
            { 
                punkListData.map(punk => (
                        <div>
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