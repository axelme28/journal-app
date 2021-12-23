import React from "react";
import { Link } from "react-router-dom";

export const LogInScreen = () => {
    return (
        <>
            <form>
                <h3
                    className="auth__title"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    LogIn
                </h3>

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                />

                <button type="submit" className="btn btn-primary btn-block">
                    Log In
                </button>
                <hr />

                <div className="auth_social-networks">
                    <p>LogIn with Google</p>
                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </>
    );
};
