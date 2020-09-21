// Section 9 Lesson 78
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
    <div>
        This is from my DashBoard Page
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my Add Expense page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my Edit Expense page
    </div>
);

const HelpPage = () => (
    <div>
        This is from my Help page
    </div>
);

const NotFound = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>DashBoard</NavLink>
        <NavLink  to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
        
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
