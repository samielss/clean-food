import '../css/Login.scss';
import ButtonMenu from './ButtonMenu';
import CardLogin from './CardLogin';

function Login() {
    return (
        <body className='Body_Login'>
            <header className='Button_Account'>
                <ButtonMenu btnClass="new_button" itemMenu="Criar uma nova conta!" />
            </header>
            <main className='New_account'>
                <CardLogin />
            </main>
        </body>
    )
};
export default Login;   