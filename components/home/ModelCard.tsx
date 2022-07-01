import { Model } from '@/types/model';
import { EyeIcon } from '@heroicons/react/solid';
import moment from 'moment';
import Image from 'next/image'
import Link from 'next/link';
import Labels from '../model/Labels';

const ModelCard = ({ model }: { model: Model }) => {
    return (
        <Link href={`/models/${model.id}`}>
            <div className="cursor-pointer border p-6 flex flex-col h-full rounded-md border-gray-100 shadow-md shadow-gray-100">
                <div className="flex justify-between items-center">
                    <h1 className="font-mono font-semibold text-lg">{model.name}</h1>
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
                    {model.description.slice(0, 110)}{model.description.length > 110 ? '...' : null}
                </p>
                <div className='mt-3'>
                    <Labels tasks={model.tasks} papers={model.papers} 
                        sensors={model.sensors} license={model.license} limit={8} />
                </div>
                <div className="text-gray-400 mt-4 space-x-1 text-xs flex justify-end items-center">
                    <p>Updated {moment(model.lastUpdated.toDate()).format('LL')}</p>
                    <p>·</p>
                    <p className="flex items-center"><EyeIcon className='w-3.5 h-3.5 mr-1' /> {model.views}</p>
                </div>
            </div>
        </Link>
    );
}

export default ModelCard;