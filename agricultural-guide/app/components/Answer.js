import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'

function Answer({answerData}) {
    return (
        <section id="answer" >
            <div className='wrapper border-bottom shadow-sm px-2'>
                <div className="profile">
                    <img src='https://asset.pptvhd36.com/images/thumbor/o/u/cf41c6d839b7.jpg' alt="profile" />
                    <p>{answerData.answer}</p>
                </div>
                <div className='time'>
                    <small>{moment(answerData.timeStamp).format('MMMM Do YYYY, h:mm:ss a')}</small>
                </div>
            </div>
        </section>
    )
}

export default Answer