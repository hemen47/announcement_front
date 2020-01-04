import React from 'react';
import axios from 'axios';


class Panel extends React.Component {

    state = {
        title: "",
        company: "",
        des: "",
        available: "",
        pic: ""
    };

    submitForm = (e) => {

        e.preventDefault();

        if (this.state.title && this.state.company && this.state.des && this.state.available && this.state.pic) {
            axios.post('http://task.test/api/panel', {
                title: this.state.title,
                company: this.state.company,
                des: this.state.des,
                available: this.state.available,
                pic: this.state.pic
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
            let element = document.getElementById("form");
            element.remove();

            this.sendSuccess('موقعیت شغلی با موفقیت اضافه شد!');
        } else {
            this.sendError('لطفا تمامی فیلد ها را پر کنید!')
        }


    };

    sendError = (msg) => {
        document.getElementById('error').innerText = msg;
    };

    sendSuccess = (msg) => {

        document.getElementById('success').innerText = msg;
    };


    render() {
        return (
            <div className="card mt-5 panel">

                <form className="p-5">
                    <div id="form" className="form-group">
                        <h5 className="mb-5">به پنل مدیریت خوش آمدید</h5>
                        <input type="text" className="form-control mb-2"
                               placeholder="عنوان شغل"
                               onChange={(e) => this.setState({title: e.target.value})}/>
                        <input type="text" className="form-control mb-2"
                               placeholder="نام شرکت"
                               onChange={(e) => this.setState({company: e.target.value})}/>
                        <input type="text" className="form-control mb-2"
                               placeholder="توضیحات"
                               onChange={(e) => this.setState({des: e.target.value})}/>
                        <input type="text" className="form-control mb-2"
                               placeholder="ظرفیت"
                               onChange={(e) => this.setState({available: e.target.value})}/>
                        <input type="text" className="form-control mb-2"
                               placeholder="لینک تصویر"
                               onChange={(e) => this.setState({pic: e.target.value})}/>
                        <button onClick={(e) => this.submitForm(e)} type="submit"
                                className="btn btn-success">اضافه کردن شغل
                        </button>
                        <p id='error' className='text-danger mt-5'>

                        </p>

                    </div>

                    <h3 id='success' className='text-success text-center'>

                    </h3>


                </form>


            </div>
        )
    }

}

export default Panel;
