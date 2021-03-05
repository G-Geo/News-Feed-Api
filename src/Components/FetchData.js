import React, { useEffect, useState } from "react"

const FetchData = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => setApiData(data.results));
            console.log(apiData)
    }, [])

    return (
        <ul>
            {!apiData ? (
                <h1>Failed to Load</h1>
            ) : (
               <li>{apiData}</li>
            )}
        </ul>
    )
}



export default FetchData