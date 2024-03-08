import '../css/Login.scss';
import ButtonMenu from './ButtonMenu';
import CardLogin from './CardLogin';

function Login () {
    return (
        <>
        <main className='New_account'>  
            <ButtonMenu btnClass="new_button" itemMenu="Criar uma nova conta!"/>
            <CardLogin/>
        </main>
        </>
    )
};
export default Login;   