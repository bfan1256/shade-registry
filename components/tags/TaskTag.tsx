import { classNames } from '@/utils/general';
import Image from 'next/image'

const TaskTag = ({ name, background, src }: { name: string, background: string, src: string}) => {
    return (
        <div className="border border-gray-200 bg-white pr-4 flex items-center rounded-md">
            <div className={classNames("bg-gradient-to-b mr-4 p-1.5 flex items-center rounded-l-md", background)}>
                <Image width={15} height={15} alt="tag" src={src} />
            </div>
            <div className='text-xs'>
                {name}
            </div>
        </div>
    );
}

export default TaskTag;