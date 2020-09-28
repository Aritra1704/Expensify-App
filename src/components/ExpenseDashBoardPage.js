import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFIlter from '../components/ExpenseListFIlter';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFIlter />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;