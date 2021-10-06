import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import OperationListPage from './pages/operation-list-page';
import OperationFormPage from './pages/operation-form-page';
import OperationDashboardPage from './pages/operation-dashboard-page';

const App = () => {
  return (
    <Container>
      <div className="ui three item menu">
				<NavLink className="item" activeClassName="active" exact to="/">
					Home
        </NavLink>
        <NavLink className="item" activeClassName="active" exact to="/operations">
					Operation List
        </NavLink>
        <NavLink className="item" activeClassName="active" exact to="/operations/new">
          Add Operation
        </NavLink>
      </div>
      <Route exact path="/" component={OperationDashboardPage} />
      <Route exact path="/operations" component={OperationListPage} />
      <Route path="/operations/new" component={OperationFormPage} />
      <Route path="/operations/edit/:id" component={OperationFormPage} />
    </Container>
  );
};

export default App;