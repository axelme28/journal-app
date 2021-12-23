import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
            <form>
                <h3
                    className="auth__title"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    Register
                </h3>

                <input
                    type="text"
                    name="name"
                    className="auth__input"
                    placeholder="Name"
                />

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

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="auth__input"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>
                <Link to="/auth/login" className="link">
                    already have an account?
                </Link>
            </form>
        </>
    );
};
