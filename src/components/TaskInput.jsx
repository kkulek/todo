function TaskInput(props){
    return (
        <input type="text" value={props.value} onChange={props.handleInput} onKeyUp={props.handleAddTask}/>
    )
}

export default TaskInput;