import {App} from './App.jsx';

export const Reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'change': {
            state = action.payload;
            return state;
        }
        default: {
            return state;
        }
    }
};