import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star.png"

function Card(data) {
    console.log(data)
    let badgeText
    if (data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`../images/${data.coverImg}`)} className="card--image"></img>
            <div className="card--stats">
                <img src={star} className="card--star"></img>
                <span>{data.stats.rating}</span>
                <span className="gray">({data.stats.reviewCount}) • </span>
                <span className="gray">{data.location}</span>
            </div>
            <p className="card--title">{data.title}</p>
            <p className="card--price">
                <span className="bold">From ${data.price}</span>/person
            </p>
        </div>
        
    )
}

export default Card