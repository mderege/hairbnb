import React from 'react';
import LoginPage from './LoginPage';

function App() {
    const setUser  = (user) => {
        console.log(user);
        // Handle user state here
    };

    return (
        <div>
            <LoginPage setUser ={setUser } />
        </div>
    );
}

export default App;