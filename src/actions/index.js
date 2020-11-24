export const ADD_TIMER = 'ADD_TIMER';
export const addTimer = (name) => {
    return {
        type: ADD_TIMER,
        payload: { name }
    }
}

export const DELETE_TIMER = 'DELETE_TIMER';
export const deleteTimer = (name) => {
    return {
        type: DELETE_TIMER,
        payload: { name }
    }
}

export const RESET_TIMER = 'RESET_TIMER';
export const resetTimer = (index) => {
    return {
        type: RESET_TIMER,
        payload: { index }
    }
}

export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const toggleTimer = (index) => {
    return {
        type: TOGGLE_TIMER,
        payload: { index }
    }
}

export const SELECT_TIMER = 'SELECT_TIMER';
export const selectTimer = (index) => {
    return {
        type: SELECT_TIMER,
        payload: { index }
    }
}

export const UPDATE = 'UPDATE';
export const update = (deltaTime) => {
    return {
        type: UPDATE,
        payload: { deltaTime }
    }
}
