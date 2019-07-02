import React from 'react';

const ToDoListContext = React.createContext({
    listItems: [],
    addItem: () => {},
    deleteItem: () => {}
})

export default ToDoListContext;