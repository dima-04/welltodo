import React from 'react';
import { TextInput, Icon,Button } from 'react-materialize';

function Login() {
    return (
        <div> <TextInput
            icon={<Icon>email</Icon>}
            id="TextInput-4"
            label="Email"
        />
            <TextInput
                icon={<Icon>lock</Icon>}
                id="TextInput-4"
                label="Password"
                password
            />
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
        </div>
    );
}
export default Login;