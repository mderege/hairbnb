import React from 'react';
import LoginPage from './LoginPage';

function App() {
    console.log("User state:", user);
    const setUser  = (user) => {
        console.log(user);
        console.log("User state:", user);

        window.location.href = '/'
    };

    return (
        <div>
            <LoginPage setUser ={setUser} />
        </div>
    );
}

export default App;