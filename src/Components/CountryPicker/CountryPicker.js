import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CountryPicker.module.css'
import {fetchedCountries} from '../../api'

export default function CountryPicker({handleCountryChange}) {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        const fetchAPI = async ()=>{
            setCountries(await fetchedCountries())
        }
        fetchAPI()
    },[setCountries])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="Global">Global</option>
                {countries.map((countryData, i) => 
                    <option
                        key={i} 
                        value={countryData.slug}>{countryData.country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
