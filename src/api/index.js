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
        const noDataCountries = 
            ['ala-aland-islands', 'american-samoa', 'anguilla','antarctica','aruba','bermuda','bouvet-island',
            'british-virgin-islands','british-indian-ocean-territory','cayman-islands','christmas-island',
            'cocos-keeling-islands','cook-islands','falkland-islands-malvinas','faroe-islands','french-guiana',
            'french-polynesia','french-southern-territories','gibraltar','greenland','guadeloupe','guam',
            'guernsey','heard-and-mcdonald-islands','hong-kong-sar-china','isle-of-man','jersey','kiribati',
            'korea-north','macao-sar-china','mayotte','marshall-islands','martinique','micronesia','montserrat',
            'nauru','netherlands-antilles','new-caledonia','niue','norfolk-island','northern-mariana-islands',
            'palau','pitcairn','puerto-rico','réunion','saint-helena','saint-pierre-and-miquelon','saint-barthélemy',
            'saint-martin-french-part','samoa','wallis-and-futuna-islands','virgin-islands','vanuatu','us-minor-outlying-islands',
            'tuvalu','turks-and-caicos-islands','turkmenistan','tonga','tokelau','svalbard-and-jan-mayen-islands',
            'south-georgia-and-the-south-sandwich-islands','solomon-islands']
        const filteredData= modifiedData.filter(countryData=> 
            noDataCountries.every(country=> countryData.slug!==country))
        const sortedData = filteredData.sort(function(a, b) {
            var nameA = a.country.toUpperCase();
            var nameB = b.country.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        return sortedData
    } catch (error) {
        
    }
}

const customURL ='https://api.covid19api.com/total/dayone/country/'
export const fetchCustomData = async (country) => {
    const customizedURL = `${customURL}${country}`
    try {
        const {data} = await axios.get(customizedURL)
        const modifiedData = data.map(countryData => ({
            confirmed: countryData.Confirmed,
            deaths: countryData.Deaths,
            recovered: countryData.Recovered,
            active: countryData.Active,
            date: countryData.Date,
        }))
        const {Confirmed:TotalConfirmed, Deaths:TotalDeaths ,Recovered:TotalRecovered} =
            data.slice(-1)[0]?data.slice(-1)[0]:null
        return {modifiedData, TotalDeaths, TotalConfirmed, TotalRecovered}
    } catch (error) {
        
    }
}
export const fetchCountryDailyData = async (country) => {
    const customizedURL = `${customURL}${country}`
    try {
        const {data} = await axios.get(customizedURL)
        const modifiedData = data.map(countryData => ({
            confirmed: countryData.Confirmed,
            deaths: countryData.Deaths,
            recovered: countryData.Recovered,
            active: countryData.Active,
            date: countryData.Date,
        }))
        return modifiedData
    } catch (error) {
        
    }
}


