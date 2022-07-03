import { getModels } from "@/libs/firebase/registry";
import { Model } from "@/types/model";
import { useEffect, useState } from "react";
import ModelCard from "./ModelCard";
import TutorialCard from "./TutorialCard";

const ModelGrid = ({ results }: { results: Model[] }) => {
    const [models, setModels] = useState<Model[]>([]);
    console.log(results)
    useEffect(() => {
        getModels().then((models) => {
            console.log(models)
            if (models) {
                setModels(models)
            } else {
                setModels([])
            }
        })
    }, [])

    return (
        <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4">
            <>
                <div className='col-span-1 sm:col-span-2'>
                    <TutorialCard />
                </div>
                {models.map((model) => (
                    <ModelCard key={model.name} model={model} />
                ))}
            </>
        </div>
    );
}

export default ModelGrid;