import React from 'react';
import { CollapsibleItem, Icon, Checkbox } from 'react-materialize';
import './style.css'

function Todo(props) {
    return (
        <CollapsibleItem
            expanded={false}
            header={props.todo.description}
            icon={<Icon>checkbox</Icon>}
            node="div"
        >
            <Checkbox
                id="Checkbox_3"
                label="Done"
                value="Done"
                checked={props.todo.checkbox}
            />
        
            <h3 className="date">{new Date(props.todo.date).toLocaleDateString()}</h3>
        </CollapsibleItem>
    );
}
export default Todo;