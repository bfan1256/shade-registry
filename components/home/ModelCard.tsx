import { DownloadIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import Labels from '../model/Labels';

const tasks = ['image-classification'];
const papers = ['arxiv:202341'];
const licenses = ['GPL-3.0'];
const sensors: string[] = [];
const description = 'RetinaNet is a modern semantic segmentation model that has performed insanely well on COCOS 2017 and is widely used across many different applications'

const ModelCard = () => {
    return (
        <div className="border p-6 flex flex-col h-full rounded-md border-gray-100 shadow-md shadow-gray-100">
            <div className="flex justify-between items-center">
                <h1 className="font-mono font-semibold text-lg">C2TAM</h1>
                <div className="flex items-center p-4 rounded-full border-gray-200 border">
                    <Image
                        height={15}
                        width={15}
                        src="/logo.svg"
                        alt="logo"
                    />
                </div>
            </div>
            <p className="text-sm mt-2 flex-1 text-gray-500">
                {description.slice(0, 110)}{description.length > 110 ? '...' : null}
            </p>
            <div className='mt-3'>
                <Labels tasks={tasks} papers={papers} 
                    sensors={sensors} licenses={licenses} limit={8} />
            </div>
            <div className="text-gray-400 mt-4 space-x-1 text-xs flex justify-end items-center">
                <p>Updated May 19, 2021</p>
                <p>·</p>
                <p className="flex items-center"><DownloadIcon className='w-3.5 h-3.5 mr-1' /> 11.2M</p>
            </div>
        </div>
    );
}

export default ModelCard;