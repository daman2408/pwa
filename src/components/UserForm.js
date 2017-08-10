import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class UserForm extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <form onSubmit={this.props.submit}>
              <div className="form-group">
                <label>Email:
                  <input type="email" className="form-control" />
                </label>
              </div>
              <div className="form-group">
                <label>Password:
                  <input type="password" className="form-control"/>
                </label>
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
