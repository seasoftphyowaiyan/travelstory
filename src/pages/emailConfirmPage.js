import React from 'react';
import { Link } from 'react-router-dom';

const EmailConfirmPage = () => {
    return (
        <div className="text-center">
            <h2>Email Confirm Page</h2>
            <h5>Please Check Verification Email Link In Your Email.</h5>
            <Link>Resend Email</Link>
        </div>
    )
}

export default EmailConfirmPage;