import PracticeInputForm from "../PracticeInputForm";

function Player(props){

    return(
        <div className={`player ${props.player.passedPractice ? "passed" : ""} ${props.player.attemptedJump ? "jump-attempted" : ""}`}>
            {props.player.name} has practiced {props.player.practiceCount} times
            <div>
                <PracticeInputForm />
                <button onClick={() => props.attemptJump(props.index)}>Jump</button>
            </div>
        </div>
        );

}
export default Player;