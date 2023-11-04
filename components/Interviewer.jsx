import React, {useState, useEffect, Fragment} from 'react';
import Chatbox from "./Chatbox";

const AudioToText = () => {
    const [listening, setListening] = useState(false);
    const [transcription, setTranscription] = useState('');

    const startListening = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US'; // Set the language to your preferred locale.
        recognition.interimResults = true; // Enable interim results.

        recognition.onstart = () => {
            setListening(true);
        };

        recognition.onend = () => {
            setListening(false);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript;
            setTranscription((prevTranscription) => prevTranscription + transcript);
        };

        recognition.start();
    };

    const stopListening = () => {
        setListening(false);
    };

    return (
        <div>
            <h2>Audio to Text</h2>
            <button onClick={startListening} disabled={listening}>
                Start Listening
            </button>
            <button onClick={stopListening} disabled={!listening}>
                Stop Listening
            </button>
            <div>{transcription}</div>
            <Fragment>
                <div>
                    <Chatbox name="User" content={"asldjfklasdjfkl alsjflkasjfkl jaksljflkasjfkl;asfasf"}/>
                </div>
            </Fragment>
        </div>
    );
};

export default AudioToText;
