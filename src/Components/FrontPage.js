import React, { useState, useEffect } from "react";
import FrontPageCards from "./FrontPageCards"

const FrontPage = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
            .then(res => res.json())
            .then(data => setApiData(data.hits));
            console.log(apiData)
    },[])



    return (
        <ul>
            {!apiData ? (
                <h1>Failed to Load</h1>
            ) : (
               
              apiData.map((list, index) => {
              return (
              <FrontPageCards key={index} title={list.title} author={list.author} url={list.url}></FrontPageCards>
              )

              
            })
                // <div>PlaceHolder</div>
            )}

        </ul>
    )
}



export default FrontPage