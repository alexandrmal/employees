
import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    someFunc = (e) => {
        console.log('Some function called');
    }

    render() {
        const {onAdd} = this.props;
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employees</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        id="user-name"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        id="user-salary"
                        placeholder="Pay rate $"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="button"
                        className="btn btn-light"
                        onClick={onAdd} >Add</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;