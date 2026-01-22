import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Hardcoded credentials (for demo)
    const validUsername = "admin";
    const validPassword = "12345";

    if (username === validUsername && password === validPassword) {
      setError("");
      navigate("/dashboard"); // redirect after login
    } else {
      setError("Invalid username or password ❌");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h3 className="text-center mb-3">Login</h3>

            <form onSubmit={handleLogin}>
              {/* Username */}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="alert alert-danger py-2">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <div className="d-grid">
                <button className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
