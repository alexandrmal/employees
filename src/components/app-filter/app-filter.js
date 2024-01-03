
import './app-filter.css';

const AppFilter = (props) => {
    const {onFilterUpdate} = props;
    let classNames = 'btn btn-outline-light js-filter-btn';

    return (
        <div className="btn-group">
            <button className={classNames}
                type="button"
                data-value="all-employees"
                onClick = {onFilterUpdate}>
                All employees
            </button>

            <button className={classNames}
                type="button"
                data-value="top-employees"
                onClick = {onFilterUpdate}>
                Top employees
            </button>

            <button className={classNames}
                type="button"
                data-value="top-salary"
                onClick = {onFilterUpdate}>
                Pay rate more then $1000
            </button>
        </div>
    );
}

export default AppFilter;