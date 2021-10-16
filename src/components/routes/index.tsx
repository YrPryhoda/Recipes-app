import React from 'react';
import {Route, Switch} from "react-router-dom";
import MainPage from "../pages/main";
import FavouritesPage from "../pages/favourites";
import {routes} from './routes';

const Routes = () => (
    <Switch>
        <Route path={routes.favourites} component={FavouritesPage}/>
        <Route path={routes.home} component={MainPage}/>
    </Switch>
);

export default Routes;