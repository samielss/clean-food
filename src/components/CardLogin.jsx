import '../css/CardLogin.css';
import ButtonMenu from './ButtonMenu';

export default () => {
    return (
            <div className='Card_container'>
                <h1 className='tituloCard itens_login'>Bem vindo de volta!</h1>
                <input className='itens_login input_login' type="email" value="E-mail" />
                <input className='itens_login input_login' type="password" />
                <ButtonMenu btnClass="btn_login itens_login" itemMenu="Entrar" />
            </div>
    )
};