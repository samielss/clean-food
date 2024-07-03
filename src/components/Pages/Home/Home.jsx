
// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"

// Importando Components do Projeto
import Footer from "../../Helpers/Footer.jsx";
import Header from "../../Helpers/Header.jsx";
import RightBar from "../../Helpers/RightBar.jsx";
import '../../../css/Home.scss';

// Importando Imagens
import Logo from '../../../img/Logo.svg'
import RightBar from "../../Helpers/RightBar.jsx";


// Função Principal
function Home() {
    return (
        <>
            <Header/>
            <main className="Home">
            <section className="text_center">
                <RightBar/>
            </section>
            </main>
            <Footer />
        </>
    )
};

export default Home;