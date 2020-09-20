import React, {useEffect} from 'react';

import styles from './App.module.css'
import {fetchData} from './api'
import {Cards, Chart, CountryPicker} from './Components'

function App() {
  useEffect(() => {
    const data =fetchData()
    console.log(data)
  },[]);
  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
