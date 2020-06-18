import React, { Component } from 'react';
import { Row, Col, DatePicker, Button, TextInput } from 'react-materialize';
import { Redirect } from "react-router-dom";
import API from '../../utils/API';
import './style.css'

class Newtodo extends Component {
    state = {
        description: '',
        date: new Date(),
        userId: "",
        errors: {},
        redirect: false
    }

    onInputChange = event => {
        event.preventDefault();
        const newState = { ...this.state };
        newState.description = event.target.value;
        this.setState(newState);
    }

    onDateChange = date => {
        const newState = { ...this.state };
        newState.date = date;
        this.setState(newState);
    }

    buttonHandler = (event) => {
        event.preventDefault();
        const errors = {};
        let errorFound = false;
        if (this.state.description == null || this.state.description.length == 0) {
            errors.descreption = "empty";
            errorFound = true;
        } else {
            var todo = {
                date: this.state.date,
                descrption: this.state.description,
                userId: this.props.user.id
            }
            API.saveTodo(todo)
                .then(() => {
                    const newState = { ...this.state };
                    newState.redirect = true;
                    this.setState(newState);
                })
                .catch(err => {
                    const newState = { ...this.state };
                    newState.errors.error = err.data;
                    this.setState(newState);
                });
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return (
            <div >
                {this.renderRedirect()}
                <Row >
                    <Col className="valign-wrapper">
                        <p> Descreption:</p>
                    </Col>
                    <Col>
                        <TextInput 
                            id="DescriptionTextInput"
                            onChange={this.onInputChange}
                            value={this.state.description}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="valign-wrapper">
                        <p>Due Date:</p>
                    </Col>
                    <Col>
                        <DatePicker 
                            id="DueDatePicket"
                            options={{
                                autoClose: true,
                                defaultDate: this.state.date ? new Date(this.state.date) : new Date() ,
                                events: [],
                                firstDay: 0,
                                placeholder:'mmm /dd/ yyyy',
                                format: 'mmm /dd/ yyyy',
                                i18n: {
                                    cancel: 'Cancel',
                                    clear: 'Clear',
                                    done: 'Ok',
                                    months: [
                                        'January',
                                        'February',
                                        'March',
                                        'April',
                                        'May',
                                        'June',
                                        'July',
                                        'August',
                                        'September',
                                        'October',
                                        'November',
                                        'December'
                                    ],
                                    monthsShort: [
                                        'Jan',
                                        'Feb',
                                        'Mar',
                                        'Apr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Aug',
                                        'Sep',
                                        'Oct',
                                        'Nov',
                                        'Dec'
                                    ],
                                    nextMonth: '›',
                                    previousMonth: '‹',
                                    weekdays: [
                                        'Sunday',
                                        'Monday',
                                        'Tuesday',
                                        'Wednesday',
                                        'Thursday',
                                        'Friday',
                                        'Saturday'
                                    ],
                                    weekdaysAbbrev: [
                                        'S',
                                        'M',
                                        'T',
                                        'W',
                                        'T',
                                        'F',
                                        'S'
                                    ],
                                    weekdaysShort: [
                                        'Sun',
                                        'Mon',
                                        'Tue',
                                        'Wed',
                                        'Thu',
                                        'Fri',
                                        'Sat'
                                    ]
                                },
                                onSelect: this.onDateChange,
                                setDefaultDate: true,
                                yearRange: 10
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.buttonHandler}

                            node="a"
                            small
                            style={{
                                marginRight: '5px'
                            }}
                            waves="light"
                        >
                            Save
                      </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Newtodo;