import '../../../css/CardLogin.scss';
import ButtonMenu from '../../Helpers/ButtonMenu';

export default () => {
    return (
            <div className='Card_container_Login'>
                <h1 className='tituloCard itens_login'>Bem vindo de volta!</h1>
                <input className='itens_login input_login' type="email" placeholder="E-mail"/>
                <input className='itens_login input_login' type="password" placeholder="Senha"/>
                <ButtonMenu btnClass="btn_login itens_login" itemMenu="Entrar" />
                <ButtonMenu btnClass="forgot_password itens_login" itemMenu="Esqueceu sua senha?" />
            </div>
    )
};