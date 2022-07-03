import { classNames } from '@/utils/general';
import Image from 'next/image'
import { useRouter } from 'next/router';

const TaskTag = ({ name, background, src }: { name: string, background: string, src: string}) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`?query=${name}`)} className="cursor-pointer border border-gray-200 bg-white pr-4 flex items-center rounded-md">
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