// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"

// Importando CSS e Imagens do Projeto
import '../css/Header.css';
import Logo from '../img/Logo.png'
import Planta1 from '../img/planta-1.png'
import Planta2 from '../img/planta-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonMenu from "./ButtonMenu";

const element = <FontAwesomeIcon icon="fa-solid fa-bars"/>

// Função Principal
function Header({planta,planta2,logo}){
    // Definindo a navegação entre as páginas
    const navigate = useNavigate();
    const handleHome = () => {
        return navigate("/")
    };
    const handleSobre = () => {
        return navigate("/sobre")
    };
    const handleEquipe = () => {
        return navigate("/Equipe")
    };
    const handleAlergias = () => {
        return navigate("/Alergias")
    };
    const handleIntolerancias = () => {
        return navigate("/Intolerâncias")
    };

    // Html
    return(
        <header>
            <nav className="navbar">
                <img src={Planta1} alt="" className="plant_one"/>
                <div className="logo"><a href="index.html"><img src={Logo} alt="" width="130rem"/></a></div>
                <div className="links">
                    <ButtonMenu redirect={handleEquipe} itemMenu="Sobre"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Nossa Equipe"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Alergias"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Intolerâncias"/>
                </div>
                <button href="login.html" className="action_btn">login</button>
                <div className="toggle_btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <i className={element}></i>
                <img src={Planta2} alt="" width="90rem" className="plant_two"/>
            </nav>
            <div class="dropdown_menu">
            <li><button href="index.html">Home</button></li>
                <li
                ><button href="about.html">Sobre</button></li>
                <li><button href="team.html">Nossa Equipe</button></li>
                <li><button href="alergias.html">Alergias</button></li>
                <li><button href="intolerancias.html">Intolerâncias</button></li>
                <li><button href="login.html" class="action_btn" id="login_dropdown">Login</button></li>
            </div>
        </header>
    )
    }
;

export default Header;