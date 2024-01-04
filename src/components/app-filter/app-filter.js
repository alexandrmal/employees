
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all-employees', label: 'All employees', colored: false},
        {name: 'top-employees', label: 'Top employees', colored: false},
        {name: 'top-salary', label: 'Pay rate more then $1000', colored: true}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const clazz = (props.filter === name) ? 'btn-light' : 'btn-outline-light';
        const style = colored ? {color: 'red'} : null;
        return (
            <button className={`btn js-filter-btn ${clazz}`}
                type="button"
                key={name}
                onClick = {() => props.onFilterUpdate(name)}
                style={style}>
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