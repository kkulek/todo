import Counter from "./Counter";
import Filters from "./Filters";
import DeleteCompletedBtn from "./DeleteCompletedBtn";

function Footer({tasks, filters, setFilters, handleDeleteCompleted}){
    return (
        <footer>
            <Counter tasks={tasks}/>
            <Filters filters={filters} setFilters={setFilters}/>

            {tasks.some((task) => task.status) && (
                <DeleteCompletedBtn handleDeleteCompleted={handleDeleteCompleted}/>
            )}
        </footer>
    )
}

export default Footer;