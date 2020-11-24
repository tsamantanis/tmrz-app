import React, {  } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTimer, resetTimer, deleteTimer } from '../actions';
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
                { !timer.isRunning ? <button
                    onClick={() => dispatch(deleteTimer(timer.name))}
                >Delete
                </button> : null }
                { timer.time > 0 && !timer.isRunning ? <button
                    onClick={() => dispatch(resetTimer(index))}
                >Reset
                </button> : null }
                <button
                    onClick={() => dispatch(toggleTimer(index))}
                >
                {timer.isRunning ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    )
}
