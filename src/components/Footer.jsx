import Logo from '../img/Logo.svg'
import '../css/Footer.scss';

function Footer(){
    return (
        <footer>
        <div id="footer_content">
        
            <div id="footer_contacts">
                <h1><figure>
                    <img src={Logo} alt="Logo" id="Logo"/>
                </figure></h1>
                <div id="footer_social_media">
                    <a href="#" class="footer_link" id="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="footer_link" id="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="#" class="footer_link" id="facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
            </div>
            <ul class="footer_list">
                <li>
                    <h3>blog</h3>
                </li>
                <li>
                    <a href="#" class="footer_link">Teste</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Teste</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Teste</a>
                </li>
            </ul>
            
            <ul class="footer_list">
                <li>
                    <h3>blog</h3>
                </li>
                <li>
                    <a href="#" class="footer_link">Teste</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Teste</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Teste</a>
                </li>
            </ul>
            <div id="footer_subscribe">
                <h3>Inscreva-se</h3>
                <p>Digite seu e-mail para ser notificado sobre nossas atividades</p>
                <div id="footer_input">
                    <input type="email" id="email"/>
                    <button>
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="footer_copyright">
            &#169
            desenvolvido por clean food
        </div>
    </footer>  
    )
};

export default Footer;