import axios from 'axios';

const url='https://api.covid19api.com/summary'

export const fetchData = async () => {
    try {
        const {
            data:{Global:{
                NewConfirmed,NewDeaths,NewRecovered,TotalConfirmed,TotalDeaths,TotalRecovered
                }}} = await axios.get(url)
        const {data:{Date:CurrentDate}} = await axios.get(url)
       
        return {NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed,TotalDeaths,TotalRecovered,CurrentDate}
    } catch (error) {
        
    }
}

const urlDaily ='https://corona-api.com/timeline'
export const fetchDailyData = async () =>{
    try {
        const {data:{data}} = await axios.get(urlDaily)
        const filteredData = data.filter(dailyData => dailyData.date!=='2020-08-17')
        const modifiedData = filteredData.map(dailyData => ({
            confirmed: dailyData.confirmed,
            deaths: dailyData.deaths,
            recovered: dailyData.recovered,
            date: dailyData.date
        }))
        const reversedData = modifiedData.reverse()
        return reversedData
    } catch (error) {
        
    }
}

const countryURL ='https://api.covid19api.com/countries'
export const fetchedCountries = async() =>{
    try {
        const {data} = await axios.get(countryURL)
        const modifiedData = data.map(countryData => ({
            country: countryData.Country,
            slug: countryData.Slug,
        }))
        return modifiedData
    } catch (error) {
        
    }
}