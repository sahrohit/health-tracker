import React, { useState } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";

import { Link, useHistory } from "react-router-dom";
import DashboardData from "./DashboardData";

const Dashboard = () => {
  const [error, setError] = useState("");

  const { logOut } = useAuth();

  const history = useHistory();

  const handleLogout = async () => {
    setError("");
    try {
      await logOut();
      history.push("/auth");
    } catch (error) {
      setError("Failed to Logout");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 class="text-center mb-4s">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <DashboardData />
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
          <Button
            variant="outline-danger"
            onClick={handleLogout}
            className="w-100 text-center"
          >
            Log Out
          </Button>
        </Card.Body>
      </Card>

      <Container
        className={`d-flex align-items-center justify-content-center`}
        style={{ minHeight: "100vh", width: "150%" }}
      >
        <Card>
          <Card.Body>
            <h2 class="text-center mb-4s">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <DashboardData />
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
            <Button
              variant="outline-danger"
              onClick={handleLogout}
              className="w-100 text-center"
            >
              Log Out
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
