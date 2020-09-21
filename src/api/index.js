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
        const {data:{data:[{date}]}} = await axios.get(urlDaily)
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed,
            deaths: dailyData.deaths,
            recovered: dailyData.recovered,
            date: dailyData.date
        }))
        return modifiedData
    } catch (error) {
        
    }
}