// import { createStore } from 'redux';

const DEBUG = process.env.NODE_ENV === "development" ? true : false;

const host = () => {
    if (DEBUG) return 'http://localhost:8000';
    return 'http://localhost';
}

// function reducer(state, action) {
//     switch(action.type) {
//         case ACTION_1: return { value: action.value_1 };
//         case ACTION_2: return { value: action.value_2 };
        
//         default: return state;
//     }
// }

// const store = createStore(reducer);

export {host};