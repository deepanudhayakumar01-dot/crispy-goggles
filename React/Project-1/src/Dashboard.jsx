import React from "react";

function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-primary">
            Dashboard
          </h2>
          <p className="text-muted">
            Welcome back! You are successfully logged in.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text fs-4 fw-bold">120</p>
              <span className="text-success">+5 today</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text fs-4 fw-bold">75</p>
              <span className="text-warning">Pending</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text fs-4 fw-bold">₹45,000</p>
              <span className="text-primary">This month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="row mt-5">
        <div className="col">
          <div className="alert alert-info">
            🔐 This page is protected. Only logged-in users can see it.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
