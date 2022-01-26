import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

import { useDispatch } from "react-redux";
import { removeErrorAction, setErrorAction } from "../../actions/ui";

export const RegisterScreen = () => {
    const dispatch = useDispatch();

    const { handleInputChange, values } = useForm({
        name: "Axel",
        email: "axel@gmail.com",
        password: "12345",
        confirmPassword: "12345",
    });

    const { name, email, password, confirmPassword } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword);
        if (isFormValid()) {
            console.log("Form is valid");
        }

        setTimeout(() => {
            dispatch(removeErrorAction());
        }, 5000);
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setErrorAction("Name is required"));
            console.log("Name is required");
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction("Email is invalid"));
            console.log("Email is not valid");
            return false;
        } else if (password !== confirmPassword || password.length < 5) {
            //prettier-ignore
            dispatch(setErrorAction("Passwords are not invalid or less than 5 characters"));
            console.log("Passwords are not the same or too short");
            return false;
        }
    };

    return (
        <>
            <form onSubmit={handleRegister}>
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
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="auth__input"
                    autoComplete="off"
                    value={confirmPassword}
                    onChange={handleInputChange}
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
                <div className="auth__alert-error"> this alert is error</div>
            </form>
        </>
    );
};
