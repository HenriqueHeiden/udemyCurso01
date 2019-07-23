import { createStore } from 'redux';

//reducer
function reducer(){
    return ['fazer cafe', 'Estudar React Native']
}

const store = createStore(reducer);

export default store;