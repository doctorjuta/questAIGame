import React, { useState } from 'react';
import UserData from './components/user-data';
import Dashboard from './components/dashboard';


export default function Game() {
    const [data, setData] = useState({
        username: '',
        isLoading: true
    });

    return (
        <div className={data.isLoading ? "container is-loading" : "container"}>
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <Dashboard />
                    <UserData data={data} setData={setData} />
                </div>
            </div>
        </div>
    );
}