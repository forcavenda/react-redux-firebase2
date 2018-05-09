import {
    TODO_SEARCHED,
    TODO_CLEAR,
    CHANGE_DESCRIPTION
} from '../constants/actionTypes';


const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_DESCRIPTION:
            return { ...state, description: action.payload }
        case TODO_SEARCHED:
            return {
                ...state, list: Array.of(action.payload).map(item => {
                    return {
                        _id: Object.keys(item)[0],
                        task: item[Object.keys(action.payload)[0]].task,
                        done: item[Object.keys(action.payload)[0]].done
                    }

                })
            }
        case TODO_CLEAR:
            return { ...state, description: '' }
        default:
            return state
    }
}