import PracticeInputForm from "../PracticeInputForm";

import './Player.css'

function Player(props){

    return(
        <div id="player-card" className={`player ${props.player.passedPractice ? "passed" : ""} ${props.player.attemptedJump ? "jump-attempted" : ""}`}>
            <div className="stats-card">
                <h3 className="player-name">{props.player.name} </h3>
                <h5>Bikes Owned: {props.player.bikesOwned}</h5>
                <h5>Practices: {props.player.practiceCount}</h5>
            </div>
            <div className="summary">
                <p>{props.player.name} has practiced {props.player.practiceCount} times which is {props.player.passedPractice ? "enough practices" : "NOT enough practices"} </p>
                <p>they'll need {Number(50)-props.player.practiceCount} more practices to jump safely.</p>
            </div>
            <div className="choice">What should {props.player.name} do?</div>
            <div className="practice-input">
            {props.player.attemptedJump ? "": 
                <PracticeInputForm 
                    addPractice={props.addPractice} 
                    index={props.index}
                />}
            </div>
            <div id="jump-card" className={`jump-${props.player.passedPractice && props.player.attemptedJump ? "success" : props.player.attemptedJump ? "fail" :""}`}>
                {props.player.attemptedJump ? "": 
                    <div>
                        <p>Attempt to jump?</p>
                        <button onClick={() => props.attemptJump(props.index)}>Jump</button>
                    </div>}
            </div>
            <div>
                {props.player.attemptedJump ? 
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

            <div className="new-bike">
                {props.player.continue ? 
                <div>
                    <h5 className="text_small">To be truly happy {props.player.name} should own {props.player.bikesToOwn} Bikes</h5>
                    <button onClick={() => props.addBike(props.index)}>Get {props.player.name} a new bike</button>
                </div> : ""}
            </div>
        </div>
        );

}
export default Player;
