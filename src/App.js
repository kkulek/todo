import './App.scss';
import {Component} from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const gen = (id = 0) => () => id++;
const genId = gen()

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tasks: [],
            filters: 'all'
        }
    }

    handleInput(event){
        this.setState({value: event.target.value});
    }

    handleAddTask(event){
        const {value, tasks} = this.state;
        if (event.key === 'Enter' && value.trim() !== '') {
            this.setState({
                tasks: [...tasks, {
                    id: genId(),
                    name: value.trim(),
                    status: false
                }],
                value: ''
            });
        }
    }

    handleChangeStatus(todo){
        const tasks = this.state.tasks.map((task) => {
            if (task === todo) {
                task.status = !task.status;
            }
            return task;
        });

        this.setState({tasks})
    }

    handleDelete(todo){
        this.setState({
            tasks: this.state.tasks.filter((task) => task !== todo)
        })
    }

    handleDeleteCompleted(){
        this.setState({
            tasks: this.state.tasks.filter((task) => !task.status)
        });
    }

    setFilters(filters){
        this.setState({filters})
    }

    render() {
        const {value, tasks, filters} = this.state

        return (
            <main className="App">
                <TaskInput value={value} handleInput={this.handleInput.bind(this)} handleAddTask={this.handleAddTask.bind(this)}/>

                {!tasks.length || (
                    <>
                        <TaskList
                            tasks={tasks}
                            filters={filters}
                            handleChangeStatus={this.handleChangeStatus.bind(this)}
                            handleDelete={this.handleDelete.bind(this)}
                        />
                        <Footer
                            filters={filters}
                            setFilters={this.setFilters.bind(this)}
                            tasks={tasks}
                            handleDeleteCompleted={this.handleDeleteCompleted.bind(this)}
                        />
                    </>
                )}
            </main>
        );
    }
}

export default App;
