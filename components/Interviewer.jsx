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
            const result = event.results[event.results.length - 1];
            if (result.isFinal) {
                const transcript = result[0].transcript;
                setTranscription((prevTranscription) => prevTranscription + transcript);
            }
        };


        recognition.start();
    };

    const stopListening = () => {
        setListening(false);
    };

    return (
        <div>
            <div>{transcription}</div>
            <Fragment>
                <div className="flex flex-col justify-between">
                    <Chatbox name="Question" content={"asldjfklasdjfkl alsjflkasjfkl jaksljflkasjfkl;asfasf"}/>
                    <div className="flex p-5">
                        <button className="bg-green-700 p-5 m-1 rounded" onClick={startListening} disabled={listening}>
                            Start Listening
                        </button>
                        <button className="bg-red-700 p-5 m-1 rounded" onClick={stopListening} disabled={!listening}>
                            Stop Listening
                        </button>
                        <button className="bg-gray-700 p-5 m-1 rounded" onClick={stopListening} disabled={!listening}>
                            Next
                        </button>
                    </div>
                </div>
            </Fragment>
        </div>
    );
};

export default AudioToText;
