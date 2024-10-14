import './Header.css'
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return <div className={"Header"}>
        <ul>
            <li className={"Header_Login"}>
                <button onClick={() => {navigate("/login")}}>Login</button>
            </li>
            <li className={"Header_Game"}>
                <button onClick={() => {navigate("/checkers")}}>Game</button>
            </li>
            <li className={"Header_About"}>
                <button onClick={() => {navigate("/about")}}>About</button>
            </li>
            <li className={"Header_Rules"}>
                <button onClick={() => {navigate("/rules")}}>Rules</button>
            </li>
        </ul>
    </div>
}

export default Header;