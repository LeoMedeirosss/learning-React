import {useState, useEffect} from 'react'


export const useFetch = (url) => {
    const [data, setData] =useState(null)


    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState(null)

    const [itemID, setItemID] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "aplication/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "aplication/json"
                }
            })

            setMethod(method);
            setItemID(data);
        }
    }

    useEffect(() =>{

        const fetchData = async () => {
            setLoading(true)

            try{
                const res = await fetch(url)

                const json = await res.json()
    
                setData(json)
            }

            catch (error) {
                console.log(error.message)

                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false)
        };

        fetchData();

    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {

            let json

            if(method === "POST") {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions)
    
                const json = await res.json()
    
                setCallFetch(json);
            } else if(method === "DELETE") {
                const deleteurl = `${url}/${itemID}`

                const res = await fetch(deleteurl, config)

                json = await res.json()
            }

            setCallFetch(json)
        };

    httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error };

}