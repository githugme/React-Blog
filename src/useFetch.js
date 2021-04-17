import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

    const [pending, setPending] = useState(true)

    const [error, setError] = useState([]);
    


    useEffect(() => {
        const abortProcess = new AbortController();
        fetch(url, {signal: abortProcess.signal})
            .then((res)=>{
                if(!res.ok){
                    throw Error('Could not fetch data')
                }
                return res.json()
                
            })
            .then((data)=>{
                setData(data)
                setPending(false)
                setError(null)
            })  
            .catch(error => {
                if (error.name==='AbortError'){
                    console.log('fetch aborted')
                } else {
                    setPending(false)
                    setError(error.message);
                }
            })
            return (()=> {abortProcess.abort()});
    }, [url]);

    return {data, pending, error}
}

export default useFetch;