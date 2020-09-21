import React, {useState, useEffect} from 'react';

import styles from './App.module.css'
import {fetchData} from './api'
import {Cards, Chart, CountryPicker} from './Components'

function App() {
  const [data,setData] = useState('')
  const [country,setCountry] = useState('')
  useEffect(() => {
    async function fetchAPI() {
      const data = await fetchData()
      setData(data)
    }
    fetchAPI()
  },[]);
  const handleCountryChange = async(country) =>{
    console.log(country)
  }
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart />
    </div>
  );
}

export default App;
