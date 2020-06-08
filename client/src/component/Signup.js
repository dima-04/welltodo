import React,{Component} from 'react';
import { TextInput, Icon, Button } from 'react-materialize';
import API from "../utils/API";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    submitForm = event => {
        event.preventDefault();
        const errors = {};
        let errorFound = false;
        if (this.state.name == null || this.state.name.length == 0) {
            errors.name = "Invalid name";
            errorFound = true;
        }

        if (this.state.email == null || this.state.email.length == 0) {
            errors.email = "Invalid email";
            errorFound = true;
        }

        if (this.state.password == null || this.state.password.length == 0) {
            errors.password = "Invalid password";
            errorFound = true;
        }

        if (this.state.password !== this.state.password2) {
            errors.password2 = "Password is not matching!";
            errorFound = true;
        }

        if (errorFound) {
            const newState = { ...this.state };
            newState.errors = errors;
            this.setState(newState);
        } else {
            API.signup(this.state)
                .then(res => this.props.handleLogin(res.data.token))
                .catch(err => console.log(err));
        }
    }

    inputChange = event => {
        event.preventDefault();
        const newState = { ...this.state };
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>

                <TextInput
                    onChange={this.inputChange}
                    className={this.state.errors.name ? "invalid" : ""}
                    icon="person"
                    id="name"
                    label="Name"
                    value={this.state.name}
                    error={this.state.errors.name}
                />


                <TextInput
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
                    className={this.state.errors.name ? "invalid" : ""}
                    icon={<Icon>lock</Icon>}
                    id="password"
                    label="Password"
                    password
                    value={this.state.password}
                    error={this.state.errors.password}
                />
                <TextInput
                    onChange={this.inputChange}
                    className={this.state.errors.password2 ? "invalid" : ""}
                    icon="vpn_key"
                    id="password2"
                    label="Repeat Password"
                    password
                    value={this.state.password2}
                    error={this.state.errors.password2}
                />

                <Button
                    node="button"
                    type="submit"
                    waves="light"
                >
                    SignUp
            <Icon right>
                        send
            </Icon>
                </Button>
            </form>
        );
    }
}
export default SignUp;