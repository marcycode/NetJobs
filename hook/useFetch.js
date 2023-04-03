import { useEffect, useState } from "react";

import axios from "axios";


const useFetch  = (endpoint, query) => {
    const [data,setData] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [error,SetError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
          headers: {
            'X-RapidAPI-Key': 'df156b4cdcmsh5216a6f0c43491ep1f35f1jsnddb8a7a7a88c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query },
    };

    const fetchData= async() => {
        setisLoading(true);

        try{
            const response = await axios.request(options);
            
            setData(response.data.data);
            setisLoading(false);    

        }catch (error){
            SetError(error);
            console.log(error);
            alert('There is an error');

        } finally{
            setisLoading(false);

        }
    };
    useEffect(() => {
        fetchData();

    }, []);

    const refetch = () => {
        setisLoading(true);
        fetchData();
    };

    return {data,isLoading,error,refetch};

};

export default useFetch;