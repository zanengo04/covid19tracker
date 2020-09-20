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