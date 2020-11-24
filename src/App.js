import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import AddTimer from './components/AddTimer';
import ListTimers from './components/ListTimers';

const store = createStore(reducers);

function App() {
    return (
        <Provider store={ store }>
            <h1>TMRZ</h1>
            <AddTimer />
            <ListTimers />
        </Provider>
    );
}

export default App;
