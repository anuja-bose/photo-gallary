import axios from "axios";
import { useEffect, useState } from "react";


const useAxios = (param) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

     axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

    const fetchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url);
            if(url.includes("search")){
                setResponse(res.data.results);
            }else {
                setResponse(res.data);
            }

           
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData(param);
    }, [param])

    return {
        response,
        setResponse,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    }
}

export default useAxios