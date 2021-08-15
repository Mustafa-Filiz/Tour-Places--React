import React from 'react'
import { data } from '../../helper/data'
import "./Card.css"

const Card = () => {
    return (
        <div className="container2">
            {data.map((card) => {
                return (
                    <div className="card">
                        <h2>{card.title}</h2>
                        <div className="image">
                            <img src={card.image} alt={card.title} />
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
