import React from 'react'
import { data } from '../../helper/data'
import "./Card.css"

const Card = () => {
    return (
        <div className="container2">
            <div className="card">
                <h2>{data[0].title}</h2>
                <img src={data[0].image}></img>
                <p>{data[0].desc}</p>
            </div>
            <div className="card">
                <h2>{data[1].title}</h2>
                <img src={data[1].image}></img>
                <p>{data[1].desc}</p>
            </div>
            <div className="card">
                <h2>{data[2].title}</h2>
                <img src={data[2].image}></img>
                <p>{data[2].desc}</p>
            </div>
            <div className="card">
                <h2>{data[3].title}</h2>
                <img src={data[3].image}></img>
                <p>{data[3].desc}</p>
            </div>
            <div className="card">
                <h2>{data[4].title}</h2>
                <img src={data[4].image}></img>
                <p>{data[4].desc}</p>
            </div>
            <div className="card">
                <h2>{data[5].title}</h2>
                <img src={data[5].image}></img>
                <p>{data[5].desc}</p>
            </div>
            <div className="card">
                <h2>{data[6].title}</h2>
                <img src={data[6].image}></img>
                <p>{data[6].desc}</p>
            </div>
            <div className="card">
                <h2>{data[7].title}</h2>
                <img src={data[7].image}></img>
                <p>{data[7].desc}</p>
            </div>

        </div>
    )
}

export default Card
