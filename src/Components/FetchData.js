import React, { useState, useEffect } from "react";

const FetchData = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
            .then(res => res.json())
            .then(data => setApiData(data.hits));
            console.log(apiData)
    }, [])



    return (
        <ul>
            {!apiData ? (
                <h1>Failed to Load</h1>
            ) : (
               
            //   apiData.map((beer) => <li>{beer}</li>)
                <div>PlaceHolder</div>
            )}

        </ul>
    )
}



export default FetchData