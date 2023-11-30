
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, id: 1},
                {name: 'Carl W.', salary: 5000, increase: true, id: 2},
                {name: 'Don S.', salary: 4000, increase: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deteleItem = (id) => {
        this.setState (({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = () => {
        let userName = document.getElementById("user-name").value,
            userSalary = document.getElementById("user-salary").value;

        this.setState (({data}) => {
            let dataCopy = JSON.parse(JSON.stringify(data));
            dataCopy.push({name: userName, salary: userSalary, increase: false, id: this.maxId});
            //console.log(data, dataCopy);

            return {
                data: dataCopy
            }
        })
        this.maxId++;
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList
                data={this.state.data}
                onDelete={this.deteleItem} />
    
                <EmployeesAddForm
                onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;