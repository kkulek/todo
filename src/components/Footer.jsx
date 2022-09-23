import Counter from "./Counter";
import Filters from "./Filters";

function Footer({tasks, filters, setFilters, handleDeleteCompleted}){
    return (
        <footer>
            <Counter tasks={tasks}/>
            <Filters filters={filters} setFilters={setFilters}/>

            {tasks.some((task) => task.status) && (
                <div>
                    <button onClick={handleDeleteCompleted}>Clear completed</button>
                </div>
            )}
        </footer>
    )
}

export default Footer;