import React, {Component} from 'react';
import ToDoListContext from './toDoContext';

class ListItem extends Component {

    

    render() {
        return (
            <ToDoListContext.Consumer>
                {(context) => (
                <div>
                    <div>{this.listitem}</div>
                    <button type='button' onClick={(e) => context.deleteItem(e.target.value)}>Delete</button>
                </div>                    
                )}
            </ToDoListContext.Consumer>
        )
    }
}

export default ListItem; 