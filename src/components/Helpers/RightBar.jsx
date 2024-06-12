import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/RightBar.scss'
import { faCarrot, faMugSaucer, faStroopwafel } from "@fortawesome/free-solid-svg-icons";


export default props => {
    const navigate = useNavigate()
    const handleVegan = () => {
        return navigate('/Vegan')
    }
    const handleLactoseFree = () => {
        return navigate('/LactoseFree')
    }
    return (
        <div className="bar">
            <ul className="list">
                <li className="itens"><FontAwesomeIcon icon={faCarrot}/></li>
                <li className="itens"><FontAwesomeIcon icon={faMugSaucer} /></li>
                <li className="itens"><FontAwesomeIcon icon={faStroopwafel}/></li>
            </ul>
        </div>
    )
}