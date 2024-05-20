import React, { useRef, useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  let navigate = useNavigate();
  let [loadingRegister, setLoadingRegister] = useState(false);
  let [eye, setEye] = useState(true);
  let [eyeConfirm, setEyeConfirm] = useState(true);

  const nameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  let handleRegister = () => {
    navigate("/login");
    setLoadingRegister(false);

    toast.success("Console log ni ko'ring");

    let InputValues = {
      Name: nameRef.current.value,
      LastName: lastNameRef.current.value,
      Username: userNameRef.current.value,
      Password: passwordRef.current.value,
      ConfirmPassword: confirmPasswordRef.current.value,
    };
    console.log(InputValues);
  };

  return (
    <section className="register">
      <div className="container">
        <h1 className="register__title">Register</h1>

        <form onSubmit={handleRegister} className="register__form" action="">
          <input
            className="register__form__input"
            type="text"
            placeholder="Firstname"
            required
            ref={nameRef}
          />
          <input
            className="register__form__input"
            type="text"
            placeholder="Lastname"
            required
            ref={lastNameRef}
          />
          <input
            className="register__form__input"
            type="text"
            placeholder="Username"
            required
            ref={userNameRef}
          />
          <div className="password__input">
            <input
              className="register__form__input"
              type={eye ? "password" : "text"}
              placeholder="Password"
              required
              ref={passwordRef}
            />
            {eye ? (
              <FaEye className="eye" onClick={() => setEye(false)} />
            ) : (
              <FaEyeSlash className="eye" onClick={() => setEye(true)} />
            )}
          </div>
          <div className="password__input">
            <input
              className="register__form__input"
              type={eyeConfirm ? "password" : "text"}
              placeholder="Confirm password"
              required
              ref={confirmPasswordRef}
            />
            {eyeConfirm ? (
              <FaEye className="eye" onClick={() => setEyeConfirm(false)} />
            ) : (
              <FaEyeSlash className="eye" onClick={() => setEyeConfirm(true)} />
            )}
          </div>
          <button disabled={loadingRegister} className="register__form__btn">
            {loadingRegister ? "Loading... " : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
