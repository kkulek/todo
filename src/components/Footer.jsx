function Footer({tasks, filters, setFilters, handleDeleteCompleted}){
    return (
        <footer>
            <div>
                {tasks.filter((task) => !task.status).length} items left
            </div>
            <div>
                <button className={filters === 'all' ? 'filter-active' : ''}
                        onClick={() => setFilters('all')}>All
                </button>
                <button className={filters === false ? 'filter-active' : ''}
                        onClick={() => setFilters(false)}>Active
                </button>
                <button className={filters === true ? 'filter-active' : ''}
                        onClick={() => setFilters(true)}>Completed
                </button>
            </div>

            {tasks.some((task) => task.status) && (
                <div>
                    <button onClick={handleDeleteCompleted}>Clear completed</button>
                </div>
            )}
        </footer>
    )
}

export default Footer;