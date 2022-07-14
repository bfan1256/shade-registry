import { tasks as DEFAULT_TASKS } from '@/components/tags/tasks'
import { Paper } from '@/types/model';
import { useEffect } from 'react';
import LicenseTag from '../tags/LicenseTag';
import PaperTag from '../tags/PaperTag';
import TaskTag from '../tags/TaskTag';

const Labels = ({ tasks, papers, sensors, license, limit = 35 }: { tasks: string[], papers: Paper[], 
    sensors: string[], license: string, limit: number }) => {
    const taskTags = tasks.map((value) => {
        const data = DEFAULT_TASKS[value]
        return (
            <TaskTag key={data['name']} name={data['name']} 
            background={data['bg']} 
            src={data['icon']} />
        )
    })
    const paperTags = papers ? papers?.map((value: Paper) => (
        <PaperTag key={value.name} text={value.name} url={value.url} />
    )) : []
    const allTags = [...taskTags, (<LicenseTag key={license} text={license} />), ...paperTags]
    return (
        <div className="flex flex-wrap gap-2">
            {allTags.slice(0, limit)}{allTags.length > limit ? <span className="text-gray-500 ml-2">{`+ ${allTags.length - limit} More`}</span> : null}
        </div>
    );
}

export default Labels;