
import { Provider } from 'react-redux';
import './App.css'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './components/redux/store';
import MyRoutes from '../MyRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <RootComponent /> */}
        <MyRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App
