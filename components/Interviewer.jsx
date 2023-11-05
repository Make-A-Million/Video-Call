import React, {useState, useEffect, Fragment} from 'react';
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

    const handleNext = async () => {
        const conversation = [
            {
                "role": "system",
                "content": `This is the question , what is the unit of power?`
            },
            {
                "role": "user",
                "content": `watt`
            },
        ];

        try {
            const data = {
                "messages": conversation,
                "max_tokens": 100,
                "temperature": 0,
                "model": "gpt-3.5-turbo"
            };

            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer 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`
                },
                body: JSON.stringify(data)
            });
            const json = await response.json();
            console.log(json)
        } catch (e) {
            console.log(e)
        }
    }

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
                            onClick={handleNext}
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
