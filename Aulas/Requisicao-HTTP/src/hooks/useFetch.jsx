import { useState, useEffect, useActionState } from "react"



export const useFetch = (url) => {

    const [data, setData] = useState(null)

    // Refatorando POST

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    // Loading

    const [loading, setLoading] = useState(false);

    // Erros 

    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),

            });

            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await fetch(url);
                const json = await res.json();

                setData(json);
            } catch (err) {
                console.log(err.message);
                setError("Houve algum erro ao carregar os dados!");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, callFetch]);

    // Refatorando POST

    useEffect(() => {

        const httpRequest = async () => {
            let json


            if (method === 'POST') {

                setLoading(true)

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                json = await res.json();

                setLoading(false)
            }

            setCallFetch(json)

        }

        httpRequest()

    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};