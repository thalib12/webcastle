"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      const { image, token } = response.data;

      if (response.data.token) {
        // Save the token to localStorage or context
        localStorage.setItem(
          "user",
          JSON.stringify({ username, image, token })
        );
        alert("Login success!");
        window.location.reload();
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && JSON.parse(user).token) {
      router.push("/");
    }
  }, []);

  return (
    <div className="loginContainer">
      <form className={"loginForm"} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={"inputGroup"}>
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
        </div>
        <div className={"inputGroup"}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <p className="no-account-txt">
          You don't have an account?{" "}
          <Link className="register" href={"/register"}>
            Register now
          </Link>
        </p>
        <button type="submit" className={"loginButton"}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
