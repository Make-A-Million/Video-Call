import React, {Fragment} from 'react';

const Chatbox = ({name, content}) => {
    return (
        <Fragment>
            <div className="flex flex-col bg-gray-500 p-5 rounded-2xl">
                <p className="text-white font-bold text-3xl">{name}</p>
                <p className={"text-white "}>{content}</p>
            </div>

        </Fragment>
    );
};

export default Chatbox;
