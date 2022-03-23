import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectinCard from './components/CollectinCard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [ punkListData, setPunkListData]  = useState([])
  const [ selectedPunk, setSelectedPunk] = useState(0)
useEffect (() =>{
const getMyNfts = async() =>{
  const openSeaData = await axios.get( "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x141398458c21c3E788A57CE046C8301cABB82f8d");
    console.log("working fine")  
  setPunkListData(openSeaData.data.assets)
   
}
 return getMyNfts();
},[])


  return( 
  <div className= "app">
  <Header />
  {
    punkListData.length > 0 && (
      <>
      < Main punkListData={punkListData}  selectedPunk = {selectedPunk} />
      < PunkList punkListData={punkListData} setSelectecPunk={setSelectedPunk} />
      </>
    )
  }

  </div>
  );
     
}

export default App;
