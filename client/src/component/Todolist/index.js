import React, { Component } from 'react';
import API from '../../utils/API';
import { Row, Col, CollapsibleItem, Collapsible, Icon } from 'react-materialize';
import Todo from '../Todolist/Todo'

class Todolist extends Component {
    state = {
        todo: []
    }
    constructor(props) {
        super(props);
       
        this.handelDeleteTodo=this.handelDeleteTodo.bind(this)
    }

    componentDidMount() {
        API.getAllTodo(this.props.user.id)
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
        const todoId = event.target.attributes.getNamedItem("data-id").value;
        API.deleteTodo(todoId)
            .then(response => {
                const newState = { ...this.state };
                newState.redirect = true;
                this.setState(newState);
            })
            .catch(err => {
                const newState = { ...this.state };
                newState.error = err.data;
                this.setState(newState);
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
                            <Todo todo={todo} deleteButtonHandler={this.handelDeleteTodo}/>)}
                    </Collapsible>
                </Col>
            </Row>
        );
    }
}

export default Todolist;