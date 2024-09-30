import EnemyCemetry from "./Game/EnemyCemetry";
import PlayerCemetry from "./Game/PlayerCemetry";
import Board from "./Game/Board";
import "./Game.css"

function Game(){
    return <div className="Game" >
        <EnemyCemetry/>
        <Board/>
        <PlayerCemetry/>
    </div>;
}

export default Game;