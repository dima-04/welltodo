import React from 'react';
import { CollapsibleItem, Icon, Checkbox } from 'react-materialize';

function Todo(props) {
    return (
        <CollapsibleItem
            expanded={false}
            header="What to do for evening"
            icon={<Icon>checkbox</Icon>}
            node="div"
        >
            <Checkbox
                id="Checkbox_3"
                label="Red"
                value="Red"
                checked={props.todo.checkbox}
            />
            <p>{props.todo.descreption}</p>
            <h3>{props.todo.date}</h3>
        </CollapsibleItem>
    );
}
export default Todo;