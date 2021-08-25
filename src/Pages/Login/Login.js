import { Button } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toastSuccessText, toastFailText } from "../../Components/toast";
import { useAuth } from "../../Contexts/AuthContext";
import { useVideosContext } from "../../Contexts/VideosContext";
import "./Login.style.css";

export const Login = () => {
  const { state } = useLocation();
  const {loader, dispatchVideos} = useVideosContext();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { loginUserWithCreds, loginUserAsGuest, credentials, setCredentials } =
    useAuth();
  const [isVisible, setVisible] = useState(false);

  async function loginHandler() {
    const { username, password } = credentials;
    dispatchVideos({type: "SET_LOADER"})
    try {
      const response = await loginUserWithCreds(username, password);
      if (response.success === true) {
        setCredentials("");
        toastSuccessText("You are Logged In now !");
        navigate(state?.from ? state.from : "/");
      }
    } catch (err) {
      console.log(err);
    }
    finally {
      dispatchVideos({type: "SET_LOADER"})
    }
  }

  async function loginAsGuestHandler() {
    dispatchVideos({type: "SET_LOADER"})
    await loginUserAsGuest();
    dispatchVideos({type: "SET_LOADER"})
    toastSuccessText("You are Logged In now !");
    setCredentials("");
    navigate(state?.from ? state.from : "/");
  }

  return (
    <div className="login-page-box">
      <div className="login-box">
        <h1 className="login-heading">Login</h1>
        <div className="credentials">
          <FaUser />
          <input
            type="text"
            placeholder="Enter Username"
            ref={inputRef}
            value={credentials.username}
            onChange={(event) =>
              setCredentials({ ...credentials, username: event.target.value })
            }
          />
        </div>
        <div className="credentials">
          <FaKey />
          <input
            type={isVisible ? "text" : "password"}
            placeholder="Enter Password"
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
          <span
            className="eye-btn"
            onClick={() => setVisible((isVisible) => !isVisible)}
          >
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <Button onClick={loginHandler} variant="contained">
          { loader ? "Logging In..." : "Log In"}
        </Button>
        <div className="login-lower">
          <NavLink className="signup-link" to="/sign-up">
            Don't have account?
          </NavLink>
          <span className="signup-link" onClick={loginAsGuestHandler}>
            Login as Guest
          </span> 
        </div>
      </div>
    </div>
  );
};
