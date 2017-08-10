import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

class UserForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <form onSubmit={this.props.submit}>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Email</label>
                                <div className="col-10">
                                    <input className="form-control" type="email" id="username"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">Password</label>
                                <div className="col-10">
                                    <input className="form-control" type="password" id="example-text-input"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserForm;
