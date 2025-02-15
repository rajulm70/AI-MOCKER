import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
            navigate(`/${path}`, {
                state: location.pathname,
            });
        return () => clearInterval(interval);
    }, [count, navigate, location, path]);
    return (
        <>
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ height: "100vh" }}
            >
                <div className="d-flex flex-row mt-2">
                    <div class="spinner-grow text-success mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning mx-2" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Spinner;
