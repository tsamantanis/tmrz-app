import { ADD_TIMER, TOGGLE_TIMER, RESET_TIMER, DELETE_TIMER, UPDATE } from '../actions';
import Timer from '../components/Timer';

const timersReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE:
            return state.map((timer) => {
                if (timer.isRunning) {
                    timer = { ...timer, time: timer.time += action.payload.deltaTime }
                }
                return timer
            })
        case ADD_TIMER:
            const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
            return [...state, new Timer(name)];
        case DELETE_TIMER:
            return state.filter(({ name }) => name !== action.payload.name );
        case TOGGLE_TIMER:
            const newState = state.map((timer, index) => {
                if (action.payload.index === index) {
                    return {...timer, isRunning: !timer.isRunning}
                }
                return timer;
            })
            return newState;
        case RESET_TIMER:
            const resetState = state.map((timer, index) => {
                if (action.payload.index === index) {
                    return {...timer, time: 0}
                }
                return timer;
            })
            return resetState;
        default:
            return state;
    }
}

export default timersReducer;
