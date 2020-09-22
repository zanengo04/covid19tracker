import React, {useState, useEffect} from 'react';

import styles from './App.module.css'
import {fetchData} from './api'
import {fetchCustomData, fetchDailyData, fetchCountryDailyData} from './api'
import {Cards, Chart, CountryPicker} from './Components'

function App() {

  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
      const fetchAPI = async () =>{
          setDailyData(await fetchDailyData())
          
      }
      fetchAPI()
  },[])

  const [data,setData] = useState('')
  useEffect(() => {
    async function fetchAPI() {
      const data = await fetchData()
      setData(data)
    }
    fetchAPI()
  },[]);
  const handleCountryChange = async(country) =>{
    country ==="Global" ? setDailyData(await fetchDailyData()): 
      setDailyData(await fetchCountryDailyData(country))
    country ==="Global" ? setData(await fetchData()) :setData(await fetchCustomData(country))
  }
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart dailyData={dailyData}/>
    </div>
  );
}

export default App;
