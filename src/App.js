import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Pictures from './components/pictures/Pictures';
import Services from './components/services/Services';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/account/Login';
import Registration from './components/account/Registration';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Pictures />
      <About />
      <Services />
      <Contact />
      <Login forId={true} forClass={false} />
    </div>
  )
}

export default App;
