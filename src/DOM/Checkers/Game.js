import EnemyCemetry from "./Game/EnemyCemetry";
import PlayerCemetry from "./Game/PlayerCemetry";
import Board from "./Game/Board";
import "./Game.css"

function Game({GameModel}){
    return <div className="Game" >
        <EnemyCemetry/>
        <Board GameModel={GameModel}/>
        <PlayerCemetry/>
    </div>;
}

export default Game;