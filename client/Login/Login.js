import React from 'react';
import LoginPage from './LoginPage';

function App() {
    const setUser  = (user) => {
        console.log(user);
        window.location.href = '/'
    };

    return (
        <div>
            <LoginPage setUser ={setUser} />
        </div>
    );
}

export default App;