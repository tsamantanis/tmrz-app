import React, {  } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTimer, deleteTimer } from '../actions';
import { formatTime } from '../utils';

import './TimerView.css';

export default function TimerView(props) {
    const { index, timer } = props;
    const dispatch = useDispatch();
    return (
        <div className="TimerView">
            <h2>{timer.name}</h2>
            <h1>{formatTime(timer.time)}</h1>
            <div className="Actions">
                <button
                    onClick={() => dispatch(deleteTimer(timer.name))}
                >Delete
                </button>
                <button
                    onClick={() => dispatch(toggleTimer(index))}
                >
                {timer.isRunning ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    )
}
