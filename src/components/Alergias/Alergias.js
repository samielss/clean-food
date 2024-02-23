import Cereais from "../../imagens/Alergia a cereais e glúten.svg";
import Frutos from "../../imagens/Alergia a frutos do mar.png";
import Leite from "../../imagens/Alergia a leite.svg";
import Marisco from "../../imagens/Alergia a marisco.svg";
import Peixe from "../../imagens/Alergia a peixe.svg";
import Soja from "../../imagens/Alergia a soja.svg";
import Amendoim from "../../imagens/Alergia Amendoim.svg";
import alergias from "../../imagens/Alergia Amendoim.svg";
import Arrow from "../../imagens/arrow.png";
import './Alergias.css';


function Alergias ({}) {
    return (
        <main>
        <div className="container_saibamais alergias">
            <div className="list">
                <h1>Tipos de Alergias.</h1>
                <ul>
                    <li>Ovo</li>
                    <li>Soja</li>
                    <li>Leite</li>
                    <li>Peixe</li>
                    <li>Peixe</li>
                    <li>Marisco</li>
                    <li>Cereais com glúten</li>
                    <li>Amendoim e frutos do mar</li>
                </ul>
            </div>

            <div className="container_slider">
                <button id="prev_btn"><img src= {Arrow} alt="prev"/></button>
                <div className="container_images">
                    <figure><img src={Amendoim} alt="teste1" className="slider on"/></figure>
                    <figure><img src={Soja} alt="teste2" className="slider "/></figure>
                    <figure><img src={Peixe} alt="teste3" className="slider "/></figure>
                    <figure><img src={Marisco} alt="teste4" className="slider "/></figure>
                    <figure><img src={Leite} alt="teste5" className="slider "/></figure>
                    <figure><img src={Frutos} alt="teste6" className="slider "/></figure>
                    <figure><img src={Cereais} alt="teste7" className="slider "/></figure>
                </div>
                <button id="next_btn"><img src= {Arrow} alt="next"/></button>
            </div>

        </div>
        </main>
    )
};

export default Alergias;