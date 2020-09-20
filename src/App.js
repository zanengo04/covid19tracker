import React, {useState, useEffect} from 'react';

import styles from './App.module.css'
import {fetchData} from './api'
import {Cards, Chart, CountryPicker} from './Components'

function App() {
  const [data,setData] = useState('')
  useEffect(() => {
    async function fetchAPI() {
      const data = await fetchData()
      setData(data)
    }
    fetchAPI()
  },[]);
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
