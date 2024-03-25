// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"

import '../../../css/Login.scss';
import ButtonMenu from '../../Helpers/ButtonMenu';
import CardLogin from './CardLogin';
import Prato1 from '../../../img/Image_Food1.svg';
import Prato2 from '../../../img/Image_Food2.svg';
import Logo from '../../../img/Logo.svg'



function Login() {
        const navigate = useNavigate();
        const HandleNewAccount = () => {
            return navigate ("/NewAccount")
        }
    return (
        <body className='Body_Login'>
            <header className='Button_Account'>
                <img src={Logo} alt="Logo" className='logo' />
                <ButtonMenu btnClass="new_button" itemMenu="Criar uma nova conta!" redirect={HandleNewAccount} />
            </header>
            <main className='New_account'>
                <img src={Prato1} alt='Prato de comida' className='prato_um' />
                <CardLogin className='Card_login' />
                <img src={Prato2} alt='Prato de comida' className='prato_dois' />
            </main>
        </body>
    )
};
export default Login;   