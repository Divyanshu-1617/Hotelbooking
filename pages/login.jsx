import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../service/authslice";
import { Navigate, Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const { token, status, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if already logged in
  if (token) {
    return <Navigate to="/profile" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p style={{ color: "red", fontSize: 12 }}>{error}</p>
        )}

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* ✅ Signup link added */}
      <p style={{ marginTop: 12, fontSize: 13 }}>
        Don’t have an account?{" "}
        <Link to="/signup">Create one</Link>
      </p>

      <p style={{ marginTop: 10, fontSize: 12 }}>
        Demo credentials: <br />
        <strong>username:</strong> kminchelle <br />
        <strong>password:</strong> 0lelplR
      </p>
    </div>
  );
}
