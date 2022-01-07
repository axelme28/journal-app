import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
    const { handleInputChange, values } = useForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { name, email, password, confirmPassword } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, confirmPassword);
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
            </form>
        </>
    );
};
