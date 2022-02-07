import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { Author } from "./features/author";
import { Navigation, List, StyledNavLink, Item } from "./AppStyled"

export const App = () => (
  <HashRouter>
    <Navigation>
      <List>
        <Item>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </Item>
      </List>
    </Navigation>
    <Switch>
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/zadania"/>
      </Route>
    </Switch>
  </HashRouter>
);
