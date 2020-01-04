import React from 'react';
import axios from 'axios';


class Login extends React.Component {


    state = {
        input: ""
    };



    handleChange = (e) => {
        this.setState({
            input: e.target.value
            }
    );
    };


    submitForm = (e) => {

        e.preventDefault();
        axios.post('http://task.test/api/login', {
            "username" : this.state.input
        })
            .then((response) => {

                this.props.triggerSetUsername(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };


    render() {
        return (
            <div className="card mt-5">

                <form className="p-5">
                    <div className="form-group">
                        <label htmlFor="username">نام کاربری</label>
                        <input type="text" className="form-control"
                               placeholder="لطفا نام کاربری خود را وارد کنید"
                               onChange={this.handleChange}/>
                    </div>

                    <button onClick={(e) => this.submitForm(e)} type="submit"
                            className="btn btn-success">ورود
                    </button>
                </form>


            </div>
        )
    }

}

export default Login;
