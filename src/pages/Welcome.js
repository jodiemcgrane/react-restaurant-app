import LoginForm from "../components/LoginForm";

const Welcome = (props) => {
    return (
        <div>
            <h1>The Welcome Page</h1>
            {!props.authenticated ? <LoginForm onAuthenticated={props.onAuthenticated} /> : ""}
        </div>
    );
}

export default Welcome;