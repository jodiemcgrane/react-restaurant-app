import Card from '@mui/material/Card';

import LoginForm from "../components/LoginForm";

const Welcome = (props) => {
    return (
        <div>
            <Card>
                <h1>The Welcome Page</h1>
                {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}
            </Card>
        </div>
    );
}

export default Welcome;