import { combineReducers } from 'redux';
import todoListReducer from './todoListReducer';
const rootReducer = combineReducers({
    todos: todoListReducer
});

export default rootReducer;

//redux devetools
//npm install --save-dev remote-redux-devtools