import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com/";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers:{
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7dd9092bcamsh0f836b5942ee8f7p1983fejsn0dbede8386ea' //ea
        }
    });

    return data;
}