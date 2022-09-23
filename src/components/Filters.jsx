function Filters({filters, setFilters}){
    return (
        <section>
            <button className={filters === 'all' ? 'filter-active' : ''}
                    onClick={() => setFilters('all')}>All
            </button>
            <button className={filters === false ? 'filter-active' : ''}
                    onClick={() => setFilters(false)}>Active
            </button>
            <button className={filters === true ? 'filter-active' : ''}
                    onClick={() => setFilters(true)}>Completed
            </button>
        </section>
    )
}

export default Filters;