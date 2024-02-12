function Player(props){

    return(
        <div className={`player ${props.player.passedPractice ? "passed" : ""} ${props.player.attemptedJump ? "jump-attempted" : ""}`}>
            <p>{props.player.name} has practiced {props.player.practiceCount} times which is {props.player.passedPractice ? "enough practices" : "NOT enough practices" } to jump safely.</p>
            <div>
                <button onClick={() => props.addPractice(props.index)}>Practice</button>
                <button onClick={() => props.attemptJump(props.index)}>Jump</button>
            <p>{props.player.passedPractice && props.player.attemptedJump ? "SICK JUMP" : props.player.attemptedJump ? "FAIL" :""}</p>
            </div>
        </div>
        );

}
export default Player;