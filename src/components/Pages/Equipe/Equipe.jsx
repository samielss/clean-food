import Footer from "../../Helpers/Footer.jsx";
import Header from "../../Helpers/Header.jsx";
import Samuel from '../../../img/samu_profile.svg';
import Diego from '../../../img/diego_profiile.svg';
import Kauan from '../../../img/kauan_profile.svg';
import Gabriel from '../../../img/gabriel_profile.svg';
import '../../../css/Equipe.scss';



function Equipe ({}) {
    
    return (
        <>
        <Header/>
        <main className="cards">
        <h1 className="title">Nossa Equipe</h1>
        <section className="card contact">
            <img src={Samuel} alt="Samuel Rocha"/>  
            <h3>Samuel Rocha</h3>
            <span>Desenvolvedor</span>
            <a href="https://github.com/samielss" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
        <section className="card contact">
            <img src={Kauan} alt="Kauan Pinheiro"/>  
            <h3>Kauan Pinheiro</h3>
            <span>DBA</span>
            <a href="https://github.com/KauanPinheiro" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
        <section className="card contact">
            <img src={Gabriel} alt="Gabriel Duarte"/>  
            <h3>Gabriel Duarte</h3>
            <span>Desenvolvedor</span>
            <a href="https://github.com/gabrieluss" target="_blank"><button><i className="fa-brands fa-github"></i>Github</button></a>
        </section>
    </main>
    <Footer/>
    </>
    )
}




export default Equipe;