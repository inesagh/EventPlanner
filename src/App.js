import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BaseNavigation from './components/base.navigation';

const App = () => {

  return (
    <Provider store={store}>
      <BaseNavigation />
    </Provider>
  )
}

export default App;
