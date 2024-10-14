import './Header.css'

function Header() {
    return <div className={"Header"}>
        <ul>
            <li className={"Header_Login"}>
                <a href="/login">Login</a>
            </li>
            <li className={"Header_Game"}>
                <a href="/checkers">Game</a>
            </li>
            <li className={"Header_About"}>
                <a href="/about">About</a>
            </li>
            <li className={"Header_Rules"}>
                <a href="/rules">Rules</a>
            </li>
        </ul>


    </div>
}

export default Header;