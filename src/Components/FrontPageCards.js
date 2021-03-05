import React from 'react'

function FrontPageCards(props){
    return(
        <div>
            <div className="CardContainer">
                <p>{props.title}</p>
                <h4>Author: {props.author}</h4>
                <a>{props.url}</a>
            </div>
        </div>
    )
}

export default FrontPageCards

