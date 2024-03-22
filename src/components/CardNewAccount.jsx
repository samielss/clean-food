import '../css/CardNewAccount.scss';
import ButtonMenu from './ButtonMenu';

export default () => {
    return (
            <div className='Card_container'>
                <h1 className='tituloCard itens_new'>Bem vindo de volta!</h1>
                <input className='itens_new input_new' type="email" placeholder="E-mail"/>
                <input className='itens_new input_new' type="password" placeholder="Senha"/>
                <ButtonMenu btnClass="btn_new itens_new" itemMenu="Entrar" />
                <ButtonMenu btnClass="forgot_password itens_new" itemMenu="Esqueceu sua senha?" />
            </div>
    )
};