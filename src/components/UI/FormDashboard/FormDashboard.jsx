import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../Context/Context';

export default function FormDashboard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const { setData, Data } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            const bothEmpty = email.trim() === '' && password.trim() === '';
            setData(bothEmpty ? false : true);
        }, 100);

        return () => clearInterval(interval);
    }, [email, password]);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setData(newEmail === "" || password === "");
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setData(newEmail === "" || password === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log('Form submitted');
            setPassword('');
            setEmail('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                    Submit
                </button>
            </form>
        </div>
    );
}