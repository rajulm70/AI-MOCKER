import React from 'react';
import { Link } from 'react-router-dom';

export default function Working() {
    return (
        <div style={{ 
            minHeight: '30vh', // Ensures the div takes at least the full height of the viewport
            background: 'linear-gradient(45deg, #b2acc5, #9baea1)', 
            padding: '20px' // Adds padding around the content
        }}>
            <div className="container" style={{ marginBottom: '100px'}}>
                <h1 className="text-center mb-4" style={{ marginTop: '40px', marginBottom: '20px' }}>
                    <b>How <b style={{color:'#894791 '}}>AI-Mocker</b> Works</b>
                </h1>
                <div className="card mb-4 shadow" style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', boxShadow: '70px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <video
                                src="https://cs2100320028857faae.blob.core.windows.net/interviewsbyai/step-1.mp4"
                                className="img-fluid rounded-start"
                                alt="AI Mocker demonstration"
                                autoPlay
                                loop
                                muted
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="list-group" style={{ marginLeft: '0px' }}>
                                <div className="list-group-item shadow-sm" style={{ backgroundColor: '#AE7AAD', color: 'black' }}>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Interactive Mock Interviews</h5>
                                    </div>
                                    <p className="mb-1">AI-Mocker provides personalized mock interviews using generative AI.</p>
                                    <small>Enhance your interview skills.</small>
                                </div>
                                <div className="list-group-item shadow-sm" style={{ backgroundColor: '#B1B99F', color: 'black' }}>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Real-time Feedback</h5>
                                    </div>
                                    <p className="mb-1">Receive instant feedback to improve your responses.</p>
                                    <small className="text-body-secondary">Get insights on your performance.</small>
                                </div>
                                <div className="list-group-item shadow-sm" style={{ backgroundColor: '#B2F48F', color: 'black' }}>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Customizable Scenarios</h5>
                                    </div>
                                    <p className="mb-1">Choose different interview scenarios to practice.</p>
                                    <small className="text-body-secondary">Prepare for various roles.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center"> {/* Centering the button */}
                    <Link className="btn btn-danger btn-lg" to='/interview'>Explore Now</Link>
                </div>
            </div>
        </div>
    );
}
