import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import GroupForm from "./groupform";
import GroupList from "./grouplist";
import { Container, Header, Button } from "semantic-ui-react";

class MainPage extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container text>
          <Header as="h2">Hello User</Header>
          <p>
            <div>
              <Button as={Link} to="/groupform" primary>
                Form a Group
              </Button>
              <Button as={Link} to="/grouplist" secondary>
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
