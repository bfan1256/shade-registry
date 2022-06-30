import { tasks } from "../tags/tasks";
import TaskTag from "../tags/TaskTag";

const FilterTasks = () => {
    return (
        <div>
            <h1 className="text-lg font-semibold mb-3">Tasks</h1>
            <div className="flex flex-wrap gap-1.5">
                {Object.values(tasks).map(({ icon, bg, name }) => (
                    <TaskTag key={name} src={icon} background={bg} name={name} />
                ))}
            </div>
        </div>
    );
}

export default FilterTasks;