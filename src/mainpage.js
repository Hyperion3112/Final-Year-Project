import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import GroupForm from "./groupform";
import GroupList from "./grouplist";
import { Container, Button } from "semantic-ui-react";
import "./App.css";

class MainPage extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container text>
          <p>
            <div>
              <Button as={Link} to="/groupform" primary>
                Form a Group
              </Button>
              <Button as={Link} to="/grouplist" color="orange">
                List of Groups
              </Button>
              <Switch>
                <Route path="/groupform">
                  <GroupForm />
                </Route>
                <Route path="/grouplist">
                  <GroupList />
                </Route>
              </Switch>
            </div>
          </p>
        </Container>
      </BrowserRouter>
    );
  }
}

export default MainPage;
