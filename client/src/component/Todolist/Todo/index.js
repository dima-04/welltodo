import React, { Component } from 'react';
import { CollapsibleItem, Icon, Checkbox, Row, Col, Button } from 'react-materialize';
import API from "../../../utils/API";
import './style.css'


class Todo extends Component {
    constructor(props) {
        super(props);
    }

    renderHeader() {
        return (
            <Row>
                <Col>{this.props.todo.description}</Col>
                <Col offset="s8">
                    <Button
                        node="button"
                        data-id={this.props.todo._id}
                        onClick={this.props.deleteButtonHandler}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        );
    }
    
    render() {
        return (
            <CollapsibleItem
                expanded={false}
                header={this.renderHeader()}
                icon={<Icon>menu</Icon>}
                node="div"
                onSelect={() => { }}
            >
                <Checkbox
                    id={"DoneCheckbox-" + this.props.todo._id}
                    label="Done"
                    value="Done"
                    checked={this.props.todo.isDone}
                    onChange={(event) => this.props.update(event, this.props.todo._id)}
                />
                <h3 className="date">{new Date(this.props.todo.date).toLocaleDateString()}</h3>
            </CollapsibleItem>
        );
    }
}

export default Todo;