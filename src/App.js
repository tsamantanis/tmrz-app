import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import reducers from './reducers';
import { update } from './actions';
import { loadState, saveState } from './utils'

import AddTimer from './components/AddTimer';
import ListTimers from './components/ListTimers';

import './App.css';

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

let lastUpdateTime = Date.now();
setInterval(() => {
    const now = Date.now();
    const deltaTime = now - lastUpdateTime;
    lastUpdateTime = now;
    store.dispatch(update(deltaTime));
}, 50)

function App() {
    return (
        <Provider store={ store }>
            <div className="App">
                <h1>TMRZ</h1>
                <AddTimer />
                <ListTimers />
            </div>
        </Provider>
    );
}

export default App;
