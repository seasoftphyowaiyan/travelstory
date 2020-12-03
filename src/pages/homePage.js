import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="text-center">
            <h2>Home Page</h2>
            <Link to='/login'>Login</Link>
            <Link to='/register' className="ml-3">Register</Link>
        </div>
    )
}

export default HomePage;