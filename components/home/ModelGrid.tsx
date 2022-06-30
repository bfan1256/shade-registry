import ModelCard from "./ModelCard";
import TutorialCard from "./TutorialCard";

const ModelGrid = () => {
    return (
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
            <div className='col-span-1 sm:col-span-2'>
                <TutorialCard />
            </div>
            <div className='col-span-1'>
                <ModelCard />
            </div>
            <div className='col-span-1'>
            <ModelCard />
            </div>
            <div className='col-span-1'>
            <ModelCard />
            </div>
            <div className='col-span-1'>
            <ModelCard />
            </div>
            <div className='col-span-1'>
            <ModelCard />
            </div>
            <div className='col-span-1'>
            <ModelCard />
            </div>
            <div className='col-span-1'>
            <ModelCard />
            </div>
        </div>
    );
}

export default ModelGrid;