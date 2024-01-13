import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {BASE_URL} from "../../lib/api";

const Join = () => {

    const router = useRouter();
    const {name: roomName} = router.query;


    const handleClick = () => {
        fetch(`${BASE_URL}/api/v1/user/room/${roomName}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <div onClick={handleClick}>
            <h1>Join {roomName}</h1>
        </div>
    );
};

export default Join;
