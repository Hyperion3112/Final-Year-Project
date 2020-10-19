import React from "react";
import { Switch, BrowserRouter, Route, Link } from "react-router-dom";
import GroupForm from "./groupform";
import GroupList from "./grouplist";
import PerCode from "./percode";
import { Container, Header, Button } from "semantic-ui-react";

class MainPage extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container text>
          <Header as="h2">Hello user</Header>
          <p>
            <div>
              <Button as={Link} to="/groupform" primary>
                Form a Group
              </Button>
              <Button as={Link} to="/grouplist" secondary>
                List of Groups
              </Button>
              <Button as={Link} to="/percode" color="olive">
                Generate Permission Code
              </Button>
              <Switch>
                <Route path="/groupform">
                  <GroupForm />
                </Route>
                <Route path="/grouplist">
                  <GroupList />
                </Route>
                <Route path="/percode">
                  <PerCode />
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
