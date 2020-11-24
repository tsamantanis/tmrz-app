import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import AddTimer from './components/AddTimer';
import ListTimers from './components/ListTimers';

import './App.css';

const store = createStore(reducers);

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
