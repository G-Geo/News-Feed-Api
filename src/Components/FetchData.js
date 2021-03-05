import React, { useState, useEffect } from "react";

const FetchData = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => setApiData(data));
            console.log(apiData)
    }, [])



    return (
        <ul>
            {!apiData ? (
                <h1>Failed to Load</h1>
            ) : (
              apiData.map((beer)=> <li>{beer.name}</li>)
            )}

        </ul>
    )
}



export default FetchData