import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import AppRoute from "./appRoute";
import AppSearchBar from "./appBar";
import LandingLayout from "./LandingLayout";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <AppRoute exact path='/' component={Login} layout={AppSearchBar}/>
                <AppRoute exact path='/home' component={Dashboard} layout={AppSearchBar}/>
                <AppRoute exact path='/register' component={Register} layout={AppSearchBar}/>
            </Switch>
        </Router>
    )
}

export default Routes;