import React from 'react';
import { Row, Col,Checkbox } from 'react-materialize';

function Todo(props) {
    return (
        <div>
            <Row>
                <Col s={8}>
                    <Checkbox 
                        id="Checkbox_3"
                        label="Red"
                        value="Red"
                        checked={props.todo.checkbox}
                    />
                    <p>{props.todo.descreption}</p>
                    <h3>{props.todo.date}</h3>
                </Col>
            </Row>
        </div>
    )

}
export default Todo;