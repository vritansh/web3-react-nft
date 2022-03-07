import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectinCard from './components/CollectinCard';
import { useState,useEffect } from 'react';



function App() {



  return( 
  <div className= "app">
  <Header />

  <CollectinCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image='https://fatcats.nftlabs.to/assets/images/fatcatxrpl-1.png'   />     

  </div>
  );
     
}

export default App;
