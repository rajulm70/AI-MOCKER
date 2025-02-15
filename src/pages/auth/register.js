import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import './register.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false); // State for button loading
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name,
                email,
                password,
                phone,
                address,
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
        <Layout title={'Register - AI-Mocker'}>
            <div className="register-photo">
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form onSubmit={submitHandle}>
                        <div className="image-center">
                            <img
                                src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
                                alt="Admin Icon"
                            />
                        </div>
                        <h2 className="text-center"><strong>Create</strong> an account.</h2>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Name"
                            />
                        </div>
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
                            <input
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="Phone"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                placeholder="Address"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                                placeholder="What is your Pet Name?"
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" required />
                                <label className="form-check-label">
                                    I agree to the license terms.
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className={`btn btn-primary btn-block ${isLoading ? 'btn-loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Please wait...' : 'Register'}
                            </button>
                        </div>
                        <Link to="/login" className="already">You already have an account? Login here.</Link>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
