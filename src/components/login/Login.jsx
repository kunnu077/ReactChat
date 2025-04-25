import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleAvatar = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setAvatar({ file, url: imageUrl });
      console.log("Avatar selected:", file.name);
    } else {
      console.warn("No file selected");
    }
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all login fields");
      return;
    }
    toast.warn("Jay Shree Ram 🙏");
    console.log("Login Data:", loginData);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!signupData.username || !signupData.email || !signupData.password) {
      toast.error("Please fill all signup fields");
      return;
    }
    console.log("Signup Data:", signupData);
    console.log("Avatar File:", avatar.file);
    toast.success("Account created successfully 🎉");
  };

  return (
    <div className="login">
      <ToastContainer />
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="separator"></div>

      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="file" className="avatar-label">
            <img
              src={avatar.url || "/avatar.png"} // Assumes public/avatar.png
              alt="avatar"
            />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />

          <input
            type="text"
            placeholder="Username"
            name="username"
            value={signupData.username}
            onChange={handleSignupChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={signupData.email}
            onChange={handleSignupChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
