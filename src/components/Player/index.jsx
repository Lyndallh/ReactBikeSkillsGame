import PracticeInputForm from "../PracticeInputForm";

import './Player.css'

function Player(props){

    return(
        <div id="player-card" className={`player ${props.player.passedPractice ? "passed" : ""} ${props.player.attemptedJump ? "jump-attempted" : ""}`}>
            <div className="stats-card">
                <h3 className="player-name">{props.player.name} </h3>
                <h5>Bikes Owned: {props.player.bikesOwned}</h5>
                <h5>Practices: {props.player.practiceCount}</h5>
                <h5>Status: {!props.player.passedPractice ? "Novice" : !props.player.attemptedJump ? "Chicken" : "Legend"}</h5>
            </div>
            {!props.player.jumpingStarted ? 
            <button className="start" onClick={() => props.startJumping(props.index)}>Let's start jumping!
            </button>:""}

            <div className="summary">
                    {!props.player.attemptedJump && props.player.jumpingStarted ?
                <div>
                <p>{props.player.name} has practiced {props.player.practiceCount} times </p>
                
                <p>{!props.player.passedPractice ? `and will need ${Number(50)-props.player.practiceCount}  more practices to land the big jump safely.`:`${props.player.name} is has done enough practice`}</p>
                <br></br>
                <p>What should {props.player.name} do?</p>
                </div> :""}
            </div>

            <div className="practice-input">
            {!props.player.attemptedJump && props.player.jumpingStarted ? 
                <PracticeInputForm 
                    addPractice={props.addPractice} 
                    index={props.index}
                />:""}
            </div>

            <div className="jump-card" id={`jump-${props.player.passedPractice && props.player.attemptedJump ? "success" : props.player.attemptedJump ? "fail" :""}`}>
                {!props.player.attemptedJump && props.player.jumpingStarted ? 
                    <div>
                        <p>Attempt the big jump?</p>
                        <button onClick={() => props.attemptJump(props.index)}>Jump</button>
                    </div>:""}
                <div>
                    {props.player.attemptedJump &&  !props.player.continue ? 
                    <div>
                        <p> {props.player.name} attempted the jump with {props.player.practiceCount} practices under their belt</p>
                        <p> ... and ... </p>
                        <p> {props.player.passedPractice ?
                                "WOOOO SIIIIIICCKKKKK JUUUMMMMPPPPPP!" :
                                `BANG! Ouch, better call in the chopper for ${props.player.name}!`}
                        </p>
                        <button onClick={() => props.selectContinue(props.index)}>What next?</button>
                    </div> : ""}
                </div>
            </div>

            <div className="new-bike">
                {props.player.continue ? 
                <div>
                    <p>To be truly happy {props.player.name} should own {props.player.bikesToOwn} Bikes</p>
                    <button onClick={() => props.addBike(props.index)}>Give {props.player.name} a new bike</button>
                </div> : ""}
            </div>
        </div>
        );

}
export default Player;
