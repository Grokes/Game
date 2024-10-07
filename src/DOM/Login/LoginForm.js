//import "./Login.css"

import {useState} from "react";
import Checkers from "../Checkers";
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsAuthenticated }){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''})
    const navigate = useNavigate();
    const users = [
        {
            username: "kirill",
            password:"123456",
            email:"123@gmail.com"},
        {
            username: "Dmitriy",
            password:"123456",
            email:"123@ya.ru"},
        {
            username: "Alex",
            password:"123456",
            email:"321@ya.ru"}
    ]

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('Данные формы', formData)
        console.log('Данные бд', users[0])

        if (validate())
        {
            setIsAuthenticated(true)
            navigate('/checkers')
        }
        else
        {
            console.log('fail')
        }
    }

    function validate(){
        for(let i = 0; i < users.length; i++)
        if (formData.password === users[i].password
            && formData.email === users[i].email
            && formData.username === users[i].username)
        {
            return true;
        }
        return false;
    }

    return(
        <div className="LoginForm">
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <h3 className="text-center">Форма входа</h3>
                <div className="form-group">
                    <input className="form-control item"
                           type="text"
                           name="username"
                           maxLength="15"
                           minLength="4"
                           id="username"
                           placeholder="Логин" required/>
                </div>
                <div className="form-group">
                    <input className="form-control item"
                           type="password"
                           name="password"
                           minLength="6"
                           id="password"
                           placeholder="Пароль" required/>
                </div>
                <div className="form-group">
                    <input className="form-control item"
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block create-account"
                            type="submit">Вход в аккаунт</button>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;