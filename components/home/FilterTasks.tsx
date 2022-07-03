import { tasks } from "../tags/tasks";
import TaskTag from "../tags/TaskTag";

const taskValues = Object.values(tasks)

const FilterTasks = () => {
    return (
        <div>
            <h1 className="text-lg font-semibold mb-3">Tasks</h1>
            <div className="flex flex-wrap gap-1.5">
                {taskValues.map(({ icon, bg, name }: any) => (
                    <TaskTag key={name} src={icon} background={bg} name={name} />
                ))}
            </div>
        </div>
    );
}

export default FilterTasks;