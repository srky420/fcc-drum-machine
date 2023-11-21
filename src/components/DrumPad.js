import React, { useEffect, useRef } from "react";

// Define component
export const DrumPad = (props) => {

    // Reference to html elements
    const audioElement = useRef(null);
    const buttonElement = useRef(null);

    // Effect hook for adding event to document
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        // Clenup
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    function handleKeyDown(e) {
        if (e.key.toUpperCase() === props.keyName && props.state.switch) {
            buttonElement.current.click();
            buttonElement.current.classList.add('drum-pad-active');
            setTimeout(() => {
                buttonElement.current.classList.remove('drum-pad-active');
            }, 100)
        }
    }

    // Plays the provided audio source
    const playAudio = () => {
        const audio = audioElement.current;
        if (props.state.switch) {
            audio.pause();
            audio.currentTime = 0;
            audio.volume = props.state.volume;
            audio.play();
            props.setDisplay(props.desc);
        }
    }

    return (
        <button id={props.desc} className="drum-pad" onClick={playAudio} ref={buttonElement} disabled={!props.state.switch}>
                {props.keyName}
                <audio className="clip" id={props.keyName} src={props.audio} ref={audioElement} />
        </button>
    )
}