function Counter({tasks}){
    return (
        <>
            {tasks.filter((task) => !task.status).length} items left
        </>
    )
}

export default Counter;