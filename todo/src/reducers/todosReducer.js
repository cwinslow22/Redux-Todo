import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, action.payload];
        case TOGGLE_COMPLETE:
            todos[action.payload].complete = !todos[action.payload].complete;
            return todos;
        default:
            return todos;
    }
};