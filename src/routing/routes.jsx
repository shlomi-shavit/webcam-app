import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "../components/Home/Home";
import Video from "../components/Video/Video";
import ThankYou from "../components/ThankYou/ThankYou";

const Routes = () => {

    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path={["/cardio", "/strength", "/flexability"]} component={Video} />
            <Route exact path='/thank-you' component={ThankYou} />
        </Switch>
    );
};

export default Routes;
