import React, { useState, forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Signup from "./Signup";
import Login from "./Login";

const Hero = forwardRef((props, ref) => {
    const [activeForm, setActiveForm] = useState('signup');
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                setIsLogin(false);
                setIsLoading(false);
                return;
            }

            try {
                const { data } = await axios.post(
                    "https://zerodha-project-ztyt.onrender.com/verify",
                    // "http://localhost:3002/verify",
                    {},
                    { withCredentials: true }
                );
                const { status, user } = data;
                setIsLogin(status);
                setUsername(user);
                if (status) {
                    toast(`Hello ${user}, Welcome to BrokerBase`, { position: "top-right" });
                } else {
                    removeCookie("token");
                }
            } catch (err) {
                console.error(err);
                removeCookie("token");
                setIsLogin(false);
                setUsername("");
            } finally {
                setIsLoading(false);
            }
        };

        setTimeout(async () => {
            await verifyCookie();
        }, 100);
    }, [cookies.token]);

    const handleLoginSuccess = async () => {
        try {
            const { data } = await axios.post(
                // "https://zerodha-project-ztyt.onrender.com/verify",
                "http://localhost:3002/verify",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setIsLogin(status);
            setUsername(user);
            if (status) {
                toast(`Hello ${user}, Welcome to BrokerBase`, { position: "top-right" });
            }
        } catch (err) {
            console.error(err);
            setIsLogin(false);
            removeCookie("token");
        }
    };

    const Logout = () => {
        removeCookie("token");
        setIsLogin(false);
        setUsername("");
    };

    const handleClick = () => {
        if (isLoggedIn) {
            window.open('http://localhost:3001/', '_blank');
        } else {
            alert('You must be logged in to access this page.');
        }
    };

    if (isLoading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container">
            <section ref={ref}>
                <div className='text-center mt-5 p-5'>
                    <h3 className='mb-3'>Open a free demat and trading account online</h3>
                    <h6 className='text-muted fs-5 mt-3'>
                        Start investing brokerage free and join a community of 1.6+ crore investors and traders
                    </h6>
                </div>

                <div className="row mb-5 align-items-center">

                    {/* Image */}
                    <div className="col-lg-7 col-md-12 text-center mb-4">
                        <img 
                            src="media/images/account_open.svg" 
                            alt="Signup" 
                            className="img-fluid mx-auto d-block" 
                            style={{ maxWidth: "80%" }} 
                        />
                    </div>

                    {/* Form */}
                    <div className="col-lg-5 col-md-12">
                        {!isLoggedIn ? (
                            <>
                                <div className="d-flex justify-content-around mb-4 flex-wrap">
                                    <h4
                                        className={`cursor-pointer ${activeForm === 'signup' ? 'text-primary border-bottom border-2 border-primary' : 'text-muted'}`}
                                        onClick={() => setActiveForm('signup')}
                                    >
                                        Signup
                                    </h4>
                                    <h4
                                        className={`cursor-pointer ${activeForm === 'login' ? 'text-primary border-bottom border-2 border-primary' : 'text-muted'}`}
                                        onClick={() => setActiveForm('login')}
                                    >
                                        Login
                                    </h4>
                                </div>

                                {activeForm === 'signup' ? (
                                    <Signup onLoginSuccess={handleLoginSuccess} />
                                ) : (
                                    <Login onLoginSuccess={handleLoginSuccess} />
                                )}

                                <p className="mt-3" style={{ fontSize: "12px" }}>
                                    By proceeding, you agree to the BrokerBase terms & privacy policy
                                </p>
                            </>
                        ) : (
                            <div className="text-center">
                                <h4 className="text-success mb-3">You are logged in</h4>
                                <button className="btn btn-primary mb-3 w-100" onClick={handleClick}>
                                    Go to Dashboard
                                </button>
                                <button className="btn btn-danger w-100" onClick={Logout}>LOGOUT</button>
                                <ToastContainer />
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
});

export default Hero;