
import { Component } from 'react';
import styled from 'styled-components'

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
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all-employees'
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

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }
    
    onUpdateSearch = (term) => {
        this.setState({term});
    }

    topEmployees = (items, filter) => {
        if (filter === 'top-employees') {
            return items.filter(item=>item.rise)
        }  else if (filter === 'top-salary') {
            return items.filter(item=>item.salary >= 1000)
        } else {
            return items;
        }
    }

    onFilterUpdate = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item  => item.increase).length;
        const visibleData = this.topEmployees(this.searchEmp(data, term), filter);

        const Wrapper = styled.div`
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 20px 20px 20px rgba(0,0,0, .2);
        `;
        return (
            <Wrapper className="app">
                <AppInfo
                employees = {employees}
                increased = {increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterUpdate={this.onFilterUpdate}/>
                </div>
    
                <EmployeesList
                data={visibleData}
                onDelete={this.deteleItem}
                onToggleProp={this.onToggleProp}/>
    
                <EmployeesAddForm
                onAdd={this.addItem} />
            </Wrapper>
        );
    }
}

export default App;