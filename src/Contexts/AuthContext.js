import { createContext, useContext, useState, useEffect } from "react";
import { toastSuccessText, toastFailText } from "../Components/toast";
import axios from "axios";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export function setUpAuthExceptionHandler(logOut, navigate) {
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
      (response) => response,
      (error) => {
          if(error?.response?.status === UNAUTHORIZED) {
              
              logOut();
              navigate("/login");
          }
          return Promise.reject(error);
      }
  )
}

export function setUniversalRequestToken(token) {
  if(token) {
      return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}



export function AuthProvider({ children }) {

    const [credentials, setCredentials] = useState({
      username: "",
      password: ""
    });
  
    const userData = JSON.parse(localStorage?.getItem("user"));
    const savedToken = JSON.parse(localStorage?.getItem("token"))
    const navigate = useNavigate();
    const [token, setToken] = useState(savedToken);
    const [loggedUser, setLoggedUser] = useState(userData);
  

    async function loginUserWithCreds(username, password) {
      try {
        const {username, password} = credentials;
        const {data, status} = await axios.post("https://AstroVids-Backend.pr1y4n5h.repl.co/login", { username, password} );
        if (status === 200) {
          loginUser(data);
          return { status, success: data.success, user: data.userData }
        } else {
          toastFailText("Please check your credentials");
        }
      } catch (error) {
        if(error.response.status === 409) {
          toastFailText("Please fill complete credentials!");
        }
        else if(error.response.status === 401) {
          toastFailText("Invalid credentials!!!");
        }
        else {
          console.log(error);
        }
      }
    }
  
    async function loginUserAsGuest() {
      try {
        const {username, password} = {
          username: "guest",
          password: "test@123" 
        }
        const {data, status} = await axios.post("https://AstroVids-Backend.pr1y4n5h.repl.co/login", { username, password } );
        if (status === 200) {
          loginUser(data);
        }
      } catch (error) {
          console.log(error);
        } 
    }
  
    function loginUser({token, userData}) {
      setToken(token);
      setLoggedUser(userData);
      localStorage?.setItem("token", JSON.stringify(token));
      localStorage?.setItem("user", JSON.stringify(userData))
    }

    async function logOutUser() {
      localStorage?.removeItem("token");
      localStorage?.removeItem("user");
      setLoggedUser(null);
      setToken(null);
      toastFailText("You are Logged Out !");
    }
  
    return (
      <AuthContext.Provider value={{ loginUserWithCreds, loginUserAsGuest, loggedUser, logOutUser, token, credentials, setCredentials }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export function useAuth() {
    return useContext(AuthContext);
  }
  