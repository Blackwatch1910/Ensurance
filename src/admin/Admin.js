import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import Preferences from '../components/Preferences';
import Login from '../components/Login';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import "./Admin.css";

function Admin() {
    const [token, setToken] = useState();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return(
        <div className="wrapper">
            <h2>This is Admin</h2>
            <BrowserRouter>
                <Switch>
                    <Route path="/admin/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/admin/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Admin;