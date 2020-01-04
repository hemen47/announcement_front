import React from 'react';
import Announcement from './components/Announcement';
import Login from "./components/login";
import Panel from "./components/panel";
import axios from 'axios';
import './App.css';


class App extends React.Component {


    state = {

        jobs: "",

        username: ""
    };


    setUsername = ($role) => {
        this.setState({
            username : $role
        })
    };

    setJobs = () => {
        this.getData();
    };



    getData = () => {
        axios.get('http://task.test/api/jobs')
            .then( (response) => {
                this.setState({
                   jobs: response,
                });
            })
            .catch( (error) => {
            console.log(error);
        });
    };


    loadPage = () => {

        if (!this.state.username) {
            return <Login triggerSetUsername={this.setUsername}/>;
        } else if(this.state.username ==="admin"){
            return <Panel />;
        } else {
            return(
                <div className="container text-center">
                    <h3 className="mt-4"> {this.state.username} عزیز خوش آمدید</h3>
                    {(this.state.jobs.data.map((job, i) => {
                                return <Announcement triggerSetJobs={this.setJobs} username={this.state.username}  key={i} job={job}/>
                            }
                        )
                    )}
                </div>
            )
        }
    };


    componentDidMount() {
        this.getData();

    }



    render() {
        return (
            <div className="container text-center">
                {this.loadPage()}
            </div>
        );
    }
}

export default App;
