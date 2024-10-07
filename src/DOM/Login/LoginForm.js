//import "./Login.css"

function LoginForm() {
    return[
        <div className="LoginForm">
            <form>
                <h3 class="text-center">Форма входа</h3>
                <div class="form-group">
                    <input class="form-control item" type="text" name="username" maxlength="15" minlength="4" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Логин" required/>
                </div>
                <div class="form-group">
                    <input class="form-control item" type="password" name="Пароль" minlength="6" id="password" placeholder="Пароль" required/>
                </div>
                <div class="form-group">
                    <input class="form-control item" type="email" name="email" id="email" placeholder="Email" required/>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block create-account" type="submit">Вход в аккаунт</button>
                </div>

            </form>
        </div>
    ];
}

export default LoginForm;