import React from "react";
import trophy from "./assets/Trophy.png";
function CardTrophy() {
    return (
        <div className="card-trophy">
            <img className="trophy" src={trophy} />
            <p className="p-caption-small">Clintes over 5 continents</p>
        </div>
    )
}

export default CardTrophy(); 