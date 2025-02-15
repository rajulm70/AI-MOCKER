import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import './login.css'; // New CSS file for login page styling
import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginLoading, setIsLoginLoading] = useState(false); // State for Log In button
    const [isForgotLoading, setIsForgotLoading] = useState(false); // State for Forgot Password button
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useAuth();

    const submitHandle = async (e) => {
        e.preventDefault();
        setIsLoginLoading(true); // Set loading state for Log In button
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password,
            });
            if (res && res.data.success) {
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || "/"); // Redirect to dashboard or home after login
                toast.success(res.data.message, { duration: 4000 });
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setIsLoginLoading(false); // Reset loading state for Log In button
        }
    };

    const handleForgotPassword = () => {
        setIsForgotLoading(true); // Set loading state for Forgot Password button
        navigate('/forgot-password');
        setTimeout(() => setIsForgotLoading(false), 1000); // Simulate network delay
    };

    return (
        <Layout title={'Login - AI-Mocker'}>
            <div className="login-photo">
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form onSubmit={submitHandle}>
                        <div className="image-center">
                            <img
                                src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
                                alt="Admin Icon"
                            />
                        </div>
                        <h2 className="text-center"><strong>Log In</strong> to your account</h2>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className={`btn btn-primary btn-block ${isLoginLoading ? 'btn-loading' : ''}`}
                                disabled={isLoginLoading}
                            >
                                {isLoginLoading ? 'Please wait...' : 'Log In'}
                            </button>
                        </div>
                        <div className="form-group">
                            <button
                                type="button"
                                className={`btn btn-primary btn-block forgot-btn ${isForgotLoading ? 'btn-loading' : ''}`}
                                onClick={handleForgotPassword}
                                disabled={isForgotLoading}
                            >
                                {isForgotLoading ? 'Please wait...' : 'Forgot Password'}
                            </button>
                        </div>
                        <Link to="/register" className="already">Don't have an account? Register here.</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
