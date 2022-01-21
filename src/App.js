import ToDoListContext from './toDoContext';
import React, {Component} from 'react';
import AddItem from './AddItem';
import List from './List';

// amazing code comment

 class ToDoListApp extends Component {
  state = {
    listItems: ['cheese', 'bacon']
  }
  
  handleDeleteItem = (deletedItem) => {
    this.setState({
      listItems: this.state.listItems.filter()
    })
  }

  handleAddItem = (addedItem) => {
    // event.preventDefault();
    this.setState({
      listItems: [...this.state.listItems, addedItem]
    })
  }

  render() {
    const contextValue = {
      list: this.state.listItems,
      deleteItem: this.handleDeleteItem,
      addItem: this.handleAddItem
    }
    return (
      <ToDoListContext.Provider value={contextValue}>
        <div className="App">
          <header className="App-header">
            <h1>My To-Do List</h1>
            <AddItem />
            <List />
          </header>

        </div>
      </ToDoListContext.Provider>
    )
  }
}
export default ToDoListApp;
