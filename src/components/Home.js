
// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"

// Importando Components do Projeto
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import '../css/Home.css';

// Importando Imagens
import Logo from '../img/Logo.png'


// Função Principal
function Home () {
    return (
        <>
        <Header/>
        <main>
            <section className="text_center">
                <img src={Logo} alt=""/>
                <p>O site com as receitas para você!!</p>
            </section>
        </main>
        <Footer/>
        </>
    )
};

export default Home;