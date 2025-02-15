import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import './login.css';
import backgroundImage from './forgot-img-1.avif';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false); // State for button loading
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
                email,
                newPassword,
                answer,
            });
            if (res && res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <Layout title={'Forgot Password - AI-Mocker'}>
            <div className="login-photo">
                <div className="form-container">
                    <div className="image-holder" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                    <form onSubmit={handleSubmit}>
                        <div className="image-center">
                            <img
                                src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
                                alt="Admin Icon"
                            />
                        </div>
                        <h2 className="text-center">Create New <strong>Password</strong></h2>
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
                                type="text"
                                className="form-control"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                                placeholder="What is your pet name?"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                placeholder="New Password"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className={`btn btn-primary btn-block ${isLoading ? 'btn-loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Please wait...' : 'Reset Password'}
                            </button>
                        </div>
                        <Link to="/register" className="already">Don't have an account? Sign up here.</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default ForgotPassword;
