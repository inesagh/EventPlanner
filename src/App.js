// import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BaseNavigation from './components/base.navigation';
import MyAccount from './components/account/myaccount/MyAccount';
import EachEmployeeDetails from './components/account/myaccount/employee/eachoccupation/eachemployee/eachemployeedetails/EachEmployeeDetails';

const App = () => {

  return (
    <Provider store={store}>
      <BaseNavigation />
    </Provider>
    // <MyAccount />
  )
}

export default App;
