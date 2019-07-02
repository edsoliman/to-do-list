import React, {Component} from 'react';
import ToDoListContext from './toDoContext';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.item = React.createRef();
    }


    render() {
        return (
            <ToDoListContext.Consumer>
                {(context) => (
                    <div>
                        {/* <form > */}
                            <input ref={this.item} id="item_name" name='itemToAdd'type="text" placeholder="add item..."
                            />
                            <button onClick={() => context.addItem(this.item.current.focus())} type='submit'>Add Item</button>
                        {/* </form> */}
                    </div>
                )}
            </ToDoListContext.Consumer>
        )
    }
}

export default AddItem;

