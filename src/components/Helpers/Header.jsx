// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"

// Importando CSS e Imagens do Projeto
import '../../css/Header.scss';
import Logo from '../../img/Logo.svg'
import Planta1 from '../../img/planta-1.png'
import Planta2 from '../../img/planta-2.png'
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
    const handleLogin = () => {
        return navigate("/Login")
    };
    const handleAlergias = () => {
        return navigate("/Alergias")
    };
    const handleIntolerancias = () => {
        return navigate("/Intolerâncias")
    };

    // Html
    return(
        <header className="Header_menu">
            <nav className="navbar">
                <div className="logo"><a href="index.html"><img src={Logo} alt="" width="130rem"/></a></div>
                <div className="links">
                    <ButtonMenu redirect={handleEquipe} itemMenu="Sobre"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Nossa Equipe"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Alergias"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Intolerâncias"/>
                </div>
                <ButtonMenu redirect={handleLogin} itemMenu="Login" btnClass="action_btn"/>
            </nav>
            <div class="dropdown_menu">
            <li><button href="index.html">Home</button></li>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Sobre"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Nossa Equipe"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Alergias"/>
                    <ButtonMenu redirect={handleEquipe} itemMenu="Intolerâncias"/>
                    <ButtonMenu redirect={handleLogin} itemMenu="Login" btnClass="action_btn"/>
            </div>
        </header>
    )
    }
;

export default Header;