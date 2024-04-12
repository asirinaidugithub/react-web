import { Component } from 'react';
import './Content.css';
import Student from './Student';

class Content extends Component {

    constructor(props) {
        console.log("constructor called");
        super(props);
        this.state = { "favouriteColor": "red", "students": [{ "id": 1, "name": "asiri", "email": "asiri@gmail.com", "address": "SKLM" }] };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps called");
        return { favoritecolor: props.favcol };
    }

    componentDidMount() {
        console.log("componentDidMount called");
        setTimeout(() => {
          this.setState({favouriteColor: "yellow"})
        }, 5000)
      } 

    render() {

        console.log("render method called");
        return (
            <div className='Content'>
                <div>{this.state.favouriteColor}</div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td><input type='text' name='fullName'></input></td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td><input type='text' name='emailAddress' ></input></td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td><input type='text' name='address'></input></td>
                            </tr>
                            <tr>
                                <td><button>Click Here</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div><br /><br />
                <Student students={this.state.students} />
            </div>
        )
    };
}

export default Content;