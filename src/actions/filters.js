// Set text
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

// Sort by
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Set Date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});