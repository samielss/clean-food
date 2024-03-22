// Importando Use Navigate para navegar entre as páginas
import { useNavigate } from "react-router-dom"

import '../css/NewAccount.scss';
import ButtonMenu from './ButtonMenu';
import CardNewAccount from './CardNewAccount';
import Prato1 from '../img/Image_Food1.svg';
import Prato2 from '../img/Image_Food2.svg';
import Logo from '../img/Logo.svg'

function NewAccount() {
    const navigate = useNavigate();
    const HandleLogin = () => {
        return navigate ("/Login")
    }
    return (
        <body className='Body_New'>
            <header className='Button_New'>
                <img src={Logo} alt="Logo" className='logo' />
                <ButtonMenu btnClass="new_button" itemMenu="Já tem uma conta?" redirect={HandleLogin}/>
            </header>
            <main className='New_account'>
                <img src={Prato1} alt='Prato de comida' className='prato_um' />
                <CardNewAccount className='Card_New_Account' />
                <img src={Prato2} alt='Prato de comida' className='prato_dois' />
            </main>
        </body>
    )
};
export default NewAccount;   