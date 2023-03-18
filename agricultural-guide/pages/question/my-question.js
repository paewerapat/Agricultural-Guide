import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Question from '.';

function MyQuestion() {

    const { user } = useSelector(state => state);
    const [myQuestion, setMyQuestion] = useState([]);

    useEffect(() => {
        fetch(`/api/question/${user.userId}`, {
            method: 'GET',
            headers: {
                token: user.token
            }
        }).then(res => res.json).then(data => {
            setMyQuestion(data)
        })
    }, [user.token, user.userId])

    return (
        <div>
            {
                myQuestion && 
                myQuestion.map((data, index) =>
                    <Question key={index} question={data} />
                )
            }
        </div>
    )
}

export default MyQuestion