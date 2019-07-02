import React, {Component} from 'react';
import ToDoListContext from './toDoContext';
import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <ToDoListContext.Consumer>
                {(context) => (
                    context.list.map(item => 
                        <ListItem listItem={item} />
                    )
                )}
            </ToDoListContext.Consumer>
        )
    }
}

export default List;