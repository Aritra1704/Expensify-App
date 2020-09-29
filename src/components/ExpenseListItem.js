import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        
        <p>{amount} - {createdAt}</p>
    </div>
);

// Nothing needed from state so no mapstatetoprops
export default ExpenseListItem;