import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard/Dashboard";
import { PrivateRoute } from "./Helpers/PrivateRoute";
import ForgotPassword from "./Auth/ForgotPassword";
import UpdateProfile from "./Dashboard/UpdateProfile";
import Auth from "./Auth/Auth";
import LandingPage from "./LandingPage/LandingPage";
import Exercise from "./Exercise/Exercise";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>

          <PrivateRoute path="/exercise" component={Exercise}></PrivateRoute>

          <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
          <PrivateRoute
            path="/update-profile"
            component={UpdateProfile}
          ></PrivateRoute>
          <Route path="/auth" component={Auth}></Route>
          <Container
            id="background"
            className={`d-flex align-items-center justify-content-center`}
            style={{ minHeight: "100vh" }}
          >
            <Route path="/forgot-password" component={ForgotPassword}></Route>
          </Container>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
