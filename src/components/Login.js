import '../css/Login.css';

function Login () {
    return (
        <main>
        <h1>Login</h1>
        <figure><img src="image/login/linha.png" alt="linha"/></figure>
        <div class="login_container">
            <div class="card_login">
                <figure><img src="image/login/login.png" alt="Login"></figure>

                <div class="form_login">
                    <form action="#" id="form">
                        <div class="form_dados">
                        <label for="email_login"><br>
                        <input type="text" id="email_login" name="email_login" placeholder="E-mail ou Telefone"><br>
                        <label for="senha_login"></label>
                        <input type="text" id="senha_login" name="senha_login" placeholder="Senha"><br>
                        <input type="submit" value="Entrar" id="Entrar">
                        <a href="#"><p>esqueceu sua senha?</p></a>
                        <button>Criar nova conta</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        <main/>
    )
};
export default Login;   