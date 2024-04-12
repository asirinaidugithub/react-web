import { Component } from "react";
import './Login.css';
import '../content/Content.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { "user": { "userName": "", "userKey": "" } };
    }

    handleLogin = (e) => {
        debugger;
    }

    render() {
        return (
            <div className="login">
                <table style={{ margin: "auto" }}>
                    <tbody>
                    <tr>
                        <td>user name</td>
                        <td><input type="text" placeholder="user name" /></td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td><input type="password" placeholder="user secret key" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button className="login-btn" onClick={this.handleLogin}>Login</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Login;