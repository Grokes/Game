import "./Board.css"
import BackgroundCellGenerator from "./Board/BackgroundCellGenerator";
import BlackChecker from "./Board/BlackChecker";
import WhiteChecker from "./Board/WhiteChecker";
import GameModelCheckerGenerator from "./Board/GameModelCheckerGenerator";

function Board({GameModel}){
    return <div id="Board">
        <BackgroundCellGenerator/>
        <GameModelCheckerGenerator GameModel={GameModel}/>
        <BlackChecker x={1} y={1}/>
        <WhiteChecker x={2} y={2}/>
    </div>
}

export default Board;