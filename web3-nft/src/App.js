import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectinCard from './components/CollectinCard';
import { useState,useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';


function App() {

  const [ punkListData, setPunkListData]  = useState([])

useEffect (() =>{
const getMyNfts = async() =>{
  const openSeaData = await axios.get( "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=");
    console.log("working fine")  
  setPunkListData(openSeaData.data.assets)
   
}
 return getMyNfts();
},[])


  return( 
  <div className= "app">
  <Header />

  <CollectinCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image='https://fatcats.nftlabs.to/assets/images/fatcatxrpl-1.png'   />     
  <PunkList punkListData={punkListData} />

  </div>



  );
     
}

export default App;
