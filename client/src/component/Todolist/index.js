import React, { Component } from 'react';
import API from '../../utils/API';
import { Row, Col, CollapsibleItem, Collapsible, Icon } from 'react-materialize';
import Todo from '../Todolist/Todo'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.user.id,
            todo: []
        }
    }
    componentDidMount() {
        API.getAllTodo(this.state.userId)
            .then(res => {
                const newState = { ...this.state };
                newState.todo = res.data;
                this.setState(newState);
            })
            .catch(err => {
                const newState = { ...this.state };
                newState.error = err.data;
                this.setState(newState);
            })
    }
    handelDeleteTodo(event) {
        event.preventDefault();
        const todo = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
        const userId = this.state.userId;
        API.deleteTodo(todo._id).then(response => {
            API.saveTodo(userId)
                .then(response => {
                    const newState = { ...this.state };
                    newState.todo = response.data;
                    this.setState(newState);
                });

        })
    }

    render() {
        return (
            <Row>
                <Col m={6} s={6}>
                    <Collapsible className="header-color"
                        accordion
                        popout
                    >
                        {this.state.todo.map(todo =>
                            <Todo todo={todo} buttonHandler={this.handelDeleteTodo} buttonText="Delete" />)}
                    </Collapsible>
                </Col>
            </Row>
        );
    }
}

export default Todolist;