import '../App.css';
import { useSelector } from 'react-redux';
import ComponentsWrapper from "./component.wrapper"; import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import MyAccount from './account/myaccount/MyAccount';
import MainPage from './MainPage.js';



const BaseNavigation = () => {
    const modalId = useSelector((state) => state.modal.modalId);
    
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="App">
                        <MainPage />
                        {modalId !== -1 && <ComponentsWrapper />}
                    </div>
                </Route>
                <Route path="/account" >
                    <div className="App">
                        <MyAccount />
                        {modalId !== -1 && <ComponentsWrapper />}
                    </div>
                </Route>
            </Switch>
        </Router>

    )
}

export default BaseNavigation;
