
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // Link
// Router custom history

// import Main from './components/main';
import Home from './components/home';
import NotFound from './components/errors/not_found';



// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory()

export const Routes = {

    
    get: function (config) {
        // let {navigation} = config
        // let navs = Object.keys(navigation).map(function(key, index) {
        //     return <Link key={key} to={'/'+key}> {navigation[key]} </Link>
        // })

        
        return (
            <Router>
                <div>
                    {/* {navs} */}
                    <Switch>
                        <Route render={(props) => <Home {...props} config={config} />} />
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
};