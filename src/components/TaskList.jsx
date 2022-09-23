function TaskList({tasks, filters, handleChangeStatus, handleDelete}) {

    return (
        <ul className="tasks">
            {tasks
                .filter((task) => filters === 'all' ? true : task.status === filters)
                .map((task) => (
                    <li key={task.id} className="task">
                        <span className={task.status ? 'status active' : 'status'}
                              onClick={() => {
                                  handleChangeStatus(task)
                              }}></span>
                        <span>{task.name}</span>
                        <button className="task-delete" onClick={() => handleDelete(task)}>x</button>
                    </li>
                ))}
        </ul>
    )
}

export default TaskList;