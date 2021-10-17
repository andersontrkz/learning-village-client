import Provider from './context/Provider';
import { Routes } from './routes';

import './styles/index.css';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
