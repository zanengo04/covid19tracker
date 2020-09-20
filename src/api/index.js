import axios from 'axios';

const url='https://api.covid19api.com/'

export const fetchData = async () => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        
    }
}