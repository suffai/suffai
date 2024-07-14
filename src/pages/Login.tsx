import React, { useState } from "react";
import axios from "axios";
import "../assets/css/register.css";
import { Check, LockKeyhole, Phone, TriangleAlert } from "lucide-react";
import googleIcon from "../assets/images/g_icon.png";
import appleIcon from "../assets/images/a_icon.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import { useUser } from "../context/useUser";

const Register: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isReadonly, setIsReadonly] = useState(false);

  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { setUser } = useUser();
  const location = useLocation();

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputNumber = event.target.value;

    if (inputNumber === "" || inputNumber === "+") {
      setPhoneNumber(inputNumber);
      setPhoneNumberValid(false);
      return;
    }

    if (!inputNumber.startsWith("+9")) {
      if (inputNumber.startsWith("+")) {
        inputNumber = "+9" + inputNumber.substring(1);
      } else {
        inputNumber = "+9" + inputNumber;
      }
    }

    const cleanedNumber = inputNumber.replace(/[^\d+]/g, "");

    setPhoneNumber(cleanedNumber);
    setPhoneNumberValid(cleanedNumber.length === 12);
  };

  const handleOtpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  const sendOtp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { phoneNumber }
      );
      if (response.status === 200) {
        console.log(response.data.data.otp);
        setOtpError("");
        setOtpSent(true);
        setIsReadonly(true);
        showAlert("OTP sent successfully!", "success");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setOtpError("Error sending OTP to server.");
      showAlert("Error sending OTP to server.", "error");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!termsAccepted) {
      setOtpError("Please accept the terms and conditions.");
      showAlert("Please accept the terms and conditions.", "error");
      return;
    }
    try {
      // const response = await axios.post("/backend/verify", {
      //   phoneNumber,
      //   otp,
      // });
      // if (response.status === 200) {
        // If OTP is verified, proceed with registration
        const loginResponse = await axios.post(
          "http://localhost:4000/api/v1/user/token",
          {
            otp,
          }
        );
        if (loginResponse.status === 200) {
        setOtpError("");
        localStorage.setItem("isAuthenticated", "true");
        showAlert("Login successful!", "success");
        setUser(loginResponse.data.data.user);
        localStorage.setItem("token", loginResponse.data.data.token);
        window.dispatchEvent(new Event("authChange"));
        const from = location.state?.from?.pathname || "/";
        navigate(from);
        }
      // }
    } catch (error) {
      console.error("Error login:", error);
      setOtpError("Incorrect Phone number or OTP please try again.");
      showAlert("Incorrect Phone number or OTP please try again.", "error");
    }
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
    setOtpError(""); // Clear any previous error message when the checkbox is clicked
  };

  const handleGoogleLogin = async () => {
    // const googleUser = await window.gapi.auth2.getAuthInstance().signIn();
    // const idToken = googleUser.getAuthResponse().id_token;

    // Send the token to your backend
    // try {
    //   const response = await axios.post("/api/google-login", { idToken });
    //   console.log(response.data); // If successful, handle response
    // } catch (error) {
    //   console.error("Google login error:", error);
    // }
  };

  const handleAppleLogin = async () => {
    // try {
    //   const response = await AppleID.auth.signIn({
    //     clientId: import.meta.env.APPLE_CLIENT_ID,
    //     scope: "name email",
    //     redirectURI: import.meta.env.REDIRECT_URI,
    //   });

    //   // Send the response.authorization.id_token to your backend
    //   const idToken = response.authorization.id_token;
    //   const backendResponse = await sendTokenToBackend(idToken);
    //   console.log(backendResponse); // If successful, handle response
    // } catch (error) {
    //   console.error("Apple Sign-In error:", error);
    // }
  };

  // const sendTokenToBackend = async (idToken) => {
  //   try {
  //     const response = await axios.post("/api/apple-login", { idToken });
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error sending token to backend:", error);
  //     throw error;
  //   }
  // };

  return (
    <>
      <main className="register-page">
        <div className="register-page-container">
          <h1 className="register-page-heading">Sign in to your account</h1>

          <form className="loginForm" onSubmit={handleSubmit}>
            <div className="form-item">
              <Phone className="form-item-icon" />
              <input
                type="tel"
                placeholder="Phone Number"
                pattern="[0-9]{4}[0-9]{6}"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                readOnly={isReadonly}
              />
              {phoneNumberValid ? (
                <Check className="form-item-icon-check" />
              ) : null}
            </div>
            <br />
            {otpSent ? (
              <div className="form-item">
                <LockKeyhole className="form-item-icon" />
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>
            ) : (
              <button type="button" className="sendOTP" onClick={sendOtp}>
                Send OTP
              </button>
            )}
            <br />
            {otpError && (
              <p className="error-message">
                <TriangleAlert />
                {otpError}
              </p>
            )}
            <br />
            <div className="form-item">
              <input
                type="checkbox"
                id="termsCheckbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="termsCheckbox" className="checkbox-custom-label">
                Accept Terms & Conditions
              </label>
            </div>
            <br />
            <button className="logBtn" id="logBtn" type="submit">
              Sign In
            </button>
          </form>

          <div className="social-logins">
            <div className="social-logins-head">
              <p>or</p>
            </div>
            <div className="social-logins-btn-container">
              <button
                title="Continue with Google"
                className="googleBtn social-login-btn"
                onClick={handleGoogleLogin}
              >
                <img src={googleIcon} alt="" />
              </button>
              <button
                title="Continue with Google"
                className="appleBtn social-login-btn"
                onClick={handleAppleLogin}
              >
                <img src={appleIcon} alt="" />
              </button>
            </div>
          </div>

          <div className="loginForm-footer">
            <p>
              Don’t have any account? <Link to="/register">Sign Up</Link>{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
