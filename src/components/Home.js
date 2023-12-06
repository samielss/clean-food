
import '../css/Home.css';
import Logo from '../img/Logo.png'

function Home () {
    return (
        <main>
            <section className="text_center">
                <img src={Logo} alt=""/>
                <p>O site com as receitas para você!!</p>
            </section>
        </main>
    )
};

export default Home;