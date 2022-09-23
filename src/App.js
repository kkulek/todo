import './App.scss';
import {useState} from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const gen = (id = 0) => () => id++;
const genId = gen()

function App() {
    const [value, setValue] = useState('');
    const [tasks, setTask] = useState([]);
    const [filters, setFilters] = useState('all');

    const handleInput = (event) => {
        setValue(event.target.value);
    }

    const handleAddTask = (event) => {
        if (event.key === 'Enter' && value.trim() !== '') {
            setTask([...tasks, {
                id: genId(),
                name: value.trim(),
                status: false
            }]);
            setValue('');
        }
    }

    const handleChangeStatus = (todo) => {
        const updatedTasks = tasks.map((task) => {
            if (task === todo) {
                task.status = !task.status;
            }
            return task;
        });

        setTask(updatedTasks);
    }

    const handleDelete = (todo) => {
        setTask(tasks.filter((task) => task !== todo))
    }

    const handleDeleteCompleted = () => {
        setTask(tasks.filter((task) => !task.status));
    }

    return (
        <div className="App">
            <TaskInput value={value} handleInput={handleInput} handleAddTask={handleAddTask}/>

            {!tasks.length || (
                <div>
                    <TaskList
                        tasks={tasks}
                        filters={filters}
                        handleChangeStatus={handleChangeStatus}
                        handleDelete={handleDelete}
                    />
                    <Footer
                        filters={filters}
                        setFilters={setFilters}
                        tasks={tasks}
                        handleDeleteCompleted={handleDeleteCompleted}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
