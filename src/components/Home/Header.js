import './Header.css';
import Logo from '../../img/Logo.png'
import Planta1 from '../../img/planta-1.png'
import Planta2 from '../../img/planta-2.png'


function Header({planta,planta2,logo}){

    
    return(
        <header>
            <nav className="navbar">
                <img src={Planta1} alt="" className="plant_one"/>
                <div className="logo"><a href="index.html"><img src={Logo} alt="" width="130rem"/></a></div>
                <ul className="links">
                    <li><a href="about.html">Sobre</a></li>
                    <li><a href="team.html">Nossa Equipe</a></li>
                    <li><a href="alergias.html">Alergias</a></li>
                    <li><a href="intolerancias.html">Intolerâncias</a></li>
                </ul>
                <a href="login.html" className="action_btn">login</a>
                <div className="toggle_btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <img src={Planta2} alt="" width="90rem" className="plant_two"/>
            </nav>
            <div class="dropdown_menu">
            <li><a href="index.html">Home</a></li>
                <li><a href="about.html">Sobre</a></li>
                <li><a href="team.html">Nossa Equipe</a></li>
                <li><a href="alergias.html">Alergias</a></li>
                <li><a href="intolerancias.html">Intolerâncias</a></li>
                <li><a href="login.html" class="action_btn" id="login_dropdown">Login</a></li>
            </div>
        </header>
    )
    }
;

export default Header;