import { getModels } from "@/libs/firebase/registry";
import { Model } from "@/types/model";
import { useEffect, useState } from "react";
import ModelCard from "./ModelCard";
import TutorialCard from "./TutorialCard";

const ModelGrid = () => {
    const [models, setModels] = useState<Model[]>([]);

    useEffect(() => {
        getModels().then((models) => {
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
                {models.map((model) => {
                    <ModelCard model={model} />
                })}
            </>
        </div>
    );
}

export default ModelGrid;