import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="text-center">
            <h2>Admin Dashboard Page</h2>
            <Link to='/'>Logout</Link>
        </div>
    )
}

export default AdminDashboard;