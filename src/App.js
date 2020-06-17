import React,{useEffect,useState} from 'react';
import {Card,Chart,CountryPicker} from "./Components";
import styles from './App.module.css';

import {getData} from './API/API'

function App () {
    const [data,setData]= useState({})

    useEffect(()=>{

        async function fetchMyAPI() {
            const data = await getData();
            setData(data)
        }
        fetchMyAPI()
    },[])


  return (
    <div  className={styles.container}>
      <Card data = {data}/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;
