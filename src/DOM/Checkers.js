import EnemyInfo from "./Checkers/EnemyInfo";
import PlayerInfo from "./Checkers/PlayerInfo";
import Game from "./Checkers/Game";
import "./Checkers.css"

function Checkers() {
    return[
        <div className="Checkers">
            <EnemyInfo/>
            <Game/>
            <PlayerInfo/>
        </div>
    ];
}

export default Checkers;