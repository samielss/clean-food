import Castanha from "../../imagens/intolerancia a castanha.svg";
import Lactose from "../../imagens/intolerancia a lactose.svg";
import Levedura from "../../imagens/intolerancia a levedura.svg";
import Milho from "../../imagens/intolerancia ao milho.svg";
import refrigerantes from "../../imagens/intolerancia ao refrigirante.svg";
import Arrow from "../../imagens/arrow.png";




function Intolerancia ({}){
    return (
        <main>
        <div className="container_saibamais">
            <div className="list">
                <h1>Tipos de intolerância.</h1>
                <ul>
                    <li>Intolerância à lactose</li>
                    <li>Intolerância a glúten</li>
                    <li>Intolerância à sacarose</li>
                    <li>Intolerância a milho</li>
                    <li>Intolerância à levedura</li>
                    <li>Intolerância à castanha</li>
                    <li>Intolerância a refrigerantes</li>
                    <li>Intolerância a alimentos de origem animal</li>
                </ul>
            </div>
            <div className="container_slider">
                <button id="prev_btn" ><img src= {Arrow} alt="prev"/></button>
                <div className="container_images">
                    <figure><img src={Castanha} alt="teste1" className="slider on"/></figure>
                    <figure><img src={Lactose}alt="teste2" className="slider "/></figure>
                    <figure><img src={Levedura} alt="teste3" className="slider "/></figure>
                    <figure><img src={Milho} alt="teste4" className="slider "/></figure>
                    <figure><img src={refrigerantes} alt="teste5" className="slider "/></figure>
                </div>
                <button id="next_btn"><img src= {Arrow} /></button>
            </div>
        </div>
    </main>
    )
}


export default Intolerancia;
