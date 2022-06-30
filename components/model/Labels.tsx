import { tasks as DEFAULT_TASKS } from '@/components/tags/tasks'
import { useEffect } from 'react';
import LicenseTag from '../tags/LicenseTag';
import PaperTag from '../tags/PaperTag';
import TaskTag from '../tags/TaskTag';

const Labels = ({ tasks, papers, sensors, licenses, limit = 35 }: { tasks: string[], papers: string[], 
    sensors: string[], licenses: string[], limit: number }) => {
    const taskTags = tasks.map((value) => {
        const data = DEFAULT_TASKS[value]
        return (
            <TaskTag key={data['name']} name={data['name']} 
            background={data['bg']} 
            src={data['icon']} />
        )
    })
    const paperTags = papers.map((value) => (
        <PaperTag key={value} text={value} />
    ))
    const licenseTags = licenses.map((value) => (
        <LicenseTag key={value} text={value} />
    ))
    const allTags = [...taskTags, ...paperTags, ...licenseTags]
    return (
        <div className="flex flex-wrap gap-2">
            {allTags.slice(0, limit)}{allTags.length > limit ? <span className="text-gray-500 ml-2">{`+ ${allTags.length - limit} More`}</span> : null}
        </div>
    );
}

export default Labels;