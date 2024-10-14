import image from "../../../../Images/black_checker.png";

function BlackChecker({x, y}){
    return <div style={{gridColumn:x, gridRow:y}}>
        <img src={image}/>
    </div>
}

export default BlackChecker;