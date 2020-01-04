import React from 'react';
import axios from 'axios';


class Announcement extends React.Component {


    submitForm = (e, id, username) => {
        e.preventDefault();

        axios.post('http://task.test/api/reserve', {
            "id" : id,
            "username": username
        })
            .then((response) => {

                if (response.status === 200) {
                    alert(response.data);
                }else if (response.status === 202){
                    alert(response.data);
                }
                else {
                    this.props.triggerSetJobs();
                }

            })
            .catch((error) => {
                console.log(error);
            });


    };





    render() {
        return (
                <div className="card m-3">
                    <img src={this.props.job.pic} className="card-img-top" alt="pic link is broken" />
                        <div className="card-body">
                            <h1 className="card-title">{this.props.job.title}</h1>
                            <h5 className="card-title mb-4">{this.props.job.company}</h5>
                            <p className="card-text mb-4">{this.props.job.des}</p>
                            <p className="card-text">ظرفیت باقیمانده: <strong  id='remainder'  className="text-success">{this.props.job.available}</strong></p>
                        </div>
                    <button onClick={(e) => this.submitForm(e, this.props.job.id, this.props.username)} type="submit" className="btn btn-success mb-5">ارسال رزومه</button>
                </div>
        )
    }

}

export default Announcement;
