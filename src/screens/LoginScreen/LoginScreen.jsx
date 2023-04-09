import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const LoginScreen = () => {
    return(
        
        <div className="App">
            <div className="login-form">
                <h2>Login </h2>
                <form>
                    <label><i className='fa fa-user'></i> Email </label>
                    <input type="text" name="email" id="inpuFor"/>
                    <label><i className='fa fa-lock'></i> Password </label>
                    <input type="text" name="password" />

                    <a href="" className="forForgot"> Forgot Password</a>

                    <button>
                        <input type="submit" id="loginButton" value="Login" />
                    </button>

                    <div className="signup">
                        ¿No tienes una cuenta? <a href="">¡Registrate ya!</a>
                    </div>
                </form>
            </div>
        </div>
        
    );
}

export default LoginScreen