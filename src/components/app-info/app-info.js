import { Component } from 'react';
import './app-info.css';

class AppInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <div className="app-info">
                <h1>All Employees in Company with no-name</h1>
                <h2>Working: {this.props.employees} employees</h2>
                <h2> Additional payouts receiving: {this.props.increased}</h2>
            </div>
        );
    }

}

export default AppInfo;