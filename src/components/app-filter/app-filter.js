
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all-employees', label: 'All employees'},
        {name: 'top-employees', label: 'Top employees'},
        {name: 'top-salary', label: 'Pay rate more then $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const clazz = (props.filter === name) ? 'btn-light' : 'btn-outline-light';

        return (
            <button className={`btn js-filter-btn ${clazz}`}
                type="button"
                key={name}
                onClick = {() => props.onFilterUpdate(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;