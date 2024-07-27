import TaskLists from "./TaskLists";
import TaskToolbar from "./TaskToolbar";

const TasksListSection = () => {
    return (
        <div>
            <TaskToolbar />
            <TaskLists />
        </div>
    );
};

export default TasksListSection;
