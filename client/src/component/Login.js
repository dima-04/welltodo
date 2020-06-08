import React,{Component} from 'react';
import { TextInput, Icon, Button } from 'react-materialize';
import API from "../utils/API";

class LoggedIn extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    submitForm = event => {
        event.preventDefault();
        const errors = {};
        let errorFound = false;

        if (this.state.email == null || this.state.email.length == 0) {
            errors.email = "Invalid email";
            errorFound = true;
        }

        if (this.state.password == null || this.state.password.length == 0) {
            errors.password = "Invalid password";
            errorFound = true;
        }

        if (errorFound) {
            const newState = { ...this.state };
            newState.errors = errors;
            this.setState(newState);
        } else {
            API.login(this.state)
                .then(res => this.props.handleLogin(res.data.token))
                .catch(err => {
                    const newState = { ...this.state };
                    newState.errors.error = err.data;
                    this.setState(newState);
                });
        }
    }

    inputChange = event => {
        event.preventDefault();
        const newState = { ...this.state };
        newState.errors.error = "";
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}> <TextInput
                onChange={this.inputChange}
                className={this.state.errors.email ? "invalid" : ""}
                icon={<Icon>email</Icon>}
                id="email"
                label="Email"
                validate
                value={this.state.email}
                error={this.state.errors.email}
            />
                <TextInput
                    onChange={this.inputChange}
                    className={this.state.errors.password ? "invalid" : ""}
                    icon={<Icon>lock</Icon>}
                    id="password"
                    label="Password"
                    password
                    value={this.state.password}
                    error={this.state.errors.password}
                />
                <div style={{ color: "red" }}>{this.state.errors.error}</div>
                <Button
                    node="button"
                    type="submit"
                    waves="light"
                >
                    Login
            <Icon right>
                        send
            </Icon>

                </Button>
            </form>
        );
    };
}
export default LoggedIn;