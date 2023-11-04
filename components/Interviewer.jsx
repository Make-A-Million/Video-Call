import React, { useState, useEffect, Fragment } from 'react';
import Chatbox from './Chatbox';

const AudioToText = () => {
    const [listening, setListening] = useState(false);
    const [transcription, setTranscription] = useState('');

    let recognition = null;

    const startListening = () => {
        if (!recognition) {
            recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
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
        }
        recognition.start();
    };

    const stopListening = () => {
        if (recognition) {
            recognition.stop();
            recognition = null;
            setListening(false);
        }
    };

    return (
        <div>
            <div>{transcription}</div>
            <Fragment>
                <div className="flex flex-col justify-between">
                    <Chatbox
                        name="Question"
                        content={"asldjfklasdjfkl alsjflkasjfkl jaksljflkasjfkl;asfasf"}
                    />
                    <div className="flex p-5">
                        <button
                            className={`${listening ? 'bg-green-950' : 'bg-green-500'} p-2 px-10 m-1 rounded`}
                            onClick={startListening}
                            disabled={listening}
                        >
                            Start
                        </button>
                        <button
                            className={`${!listening ? 'bg-red-950' : 'bg-red-500'} p-2 px-10 m-1 rounded`}
                            onClick={stopListening}
                            disabled={!listening}
                        >
                            Stop
                        </button>
                        <button
                            className="bg-gray-700 p-2 px-10 m-1 rounded"
                            onClick={stopListening}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Fragment>
        </div>
    );
};

export default AudioToText;
