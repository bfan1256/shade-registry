import ModelCard from "./ModelCard";
import TutorialCard from "./TutorialCard";

const ModelGrid = () => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-4">
            <div className='col-span-2'>
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