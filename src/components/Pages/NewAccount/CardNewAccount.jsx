import '../../../css/CardNewAccount.scss';
import ButtonMenu from '../../Helpers/ButtonMenu';

export default () => {
    return (
            <div className='Card_container'>
                <h1 className='tituloCard itens_new'>Bem vindo de volta!</h1>
                <input className='itens_new input_new' type="text" placeholder="Qual seu nome?"/>
                <input className='itens_new input_new' type="e-mail" placeholder="Qual seu e-mail?"/>
                <input className='itens_new input_new' type="password" placeholder="Defina uma senha"/>
                <input className='itens_new input_new' type="password" placeholder="Confirme sua nova senha"/>
                <ButtonMenu btnClass="btn_new itens_new" itemMenu="Criar conta!" />
            </div>
    )
};