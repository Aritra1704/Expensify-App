// Section 9 Lesson 78
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
        
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
