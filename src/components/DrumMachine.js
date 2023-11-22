import React, { useState } from "react";
import { DrumPad } from "./DrumPad";

// Define component
export default function DrumMachine() {

    // Define state
    const [state, setState] = useState({
        switch: true,
        desc: '',
        volume: '0.25'
    });

    // Set display description
    const setDisplay = (desc) => {
        setState((state) => ({
            ...state,
            desc: desc
        }));
    }

    // Switch drum on/off
    const switchDrum = () => {
        setState((state) => ({
            ...state,
            switch: !state.switch,
            desc: ''
        }))
    }

    // Set Volume
    const setVolume = (e) => {
        setState((state) => ({
            ...state,
            volume: e.target.value
        }))
    }

    return (
        <div id="drum-machine">
            <div className="drum-pad-grid">
                <DrumPad desc="Heater 1" setDisplay={setDisplay} keyName="Q" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
                <DrumPad desc="Heater 2" setDisplay={setDisplay} keyName="W" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
                <DrumPad desc="Heater 3" setDisplay={setDisplay} keyName="E" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
                <DrumPad desc="Heater 4" setDisplay={setDisplay} keyName="A" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
                <DrumPad desc="Clap" setDisplay={setDisplay} keyName="S" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
                <DrumPad desc="Open HH" setDisplay={setDisplay} keyName="D" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
                <DrumPad desc="Kick n' Hat" setDisplay={setDisplay} keyName="Z" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
                <DrumPad desc="Kick" setDisplay={setDisplay} keyName="X" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
                <DrumPad desc="Closed HH" setDisplay={setDisplay} keyName="C" state={state} audio="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
            </div>
            <div id="display">
                <button className="switch-btn" onClick={switchDrum}>Power {state.switch ? <i className="fa fa-2x fa-toggle-on"></i> : <i className="fa fa-2x fa-toggle-off"></i>}</button>
                <p className="drum-desc">{state.switch && state.desc}</p>
                <div className="volume-slider">
                    <label htmlFor="volumeRange">Volume</label>
                    <input type="range" min="0" max="1" step="0.1" value={state.volume} onChange={setVolume} id="volumeRange"></input>
                </div>
            </div>
            <p className="creator">By <a href="https://github.com/srky420" target="_blank">Shahrukh</a></p>
        </div>
    );
}