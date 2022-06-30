import { Markdown } from "@/components/markdown/MarkDownRenderer";
import Labels from "@/components/model/Labels";
import PaperTag from "@/components/tags/PaperTag";
import { CodeIcon } from "@heroicons/react/solid";
import Image from 'next/image'
import {Sparklines, SparklinesLine} from 'react-sparklines'


const tasks = ['image-classification'];
const papers = ['arxiv:202341'];
const licenses = ['gpl-3.0'];
const sensors: string[] = [];

const result = `
\`\`\`bash
docker pull shaderobotics/c2tam
\`\`\`
`

function generateRandomData() {
    const data = []
    for (let i = 0; i < 25; i++) {
      data.push(Math.random() * 100)
    }
    return data
}

const text = `
## BERT base model (uncased)
Pretrained model on English language using a masked language modeling (MLM) objective. It was introduced in this paper and first released in this repository. This model is uncased: it does not make a difference between english and English.

Disclaimer: The team releasing BERT did not write a model card for this model so this model card has been written by the Hugging Face team.

## Model description
BERT is a transformers model pretrained on a large corpus of English data in a self-supervised fashion. This means it was pretrained on the raw texts only, with no humans labelling them in any way (which is why it can use lots of publicly available data) with an automatic process to generate inputs and labels from those texts. More precisely, it was pretrained with two objectives:

Masked language modeling (MLM): taking a sentence, the model randomly masks 15% of the words in the input then run the entire masked sentence through the model and has to predict the masked words. This is different from traditional recurrent neural networks (RNNs) that usually see the words one after the other, or from autoregressive models like GPT which internally mask the future tokens. It allows the model to learn a bidirectional representation of the sentence.
Next sentence prediction (NSP): the models concatenates two masked sentences as inputs during pretraining. Sometimes they correspond to sentences that were next to each other in the original text, sometimes not. The model then has to predict if the two sentences were following each other or not.
This way, the model learns an inner representation of the English language that can then be used to extract features useful for downstream tasks: if you have a dataset of labeled sentences for instance, you can train a standard classifier using the features produced by the BERT model as inputs.

## Intended uses & limitations
You can use the raw model for either masked language modeling or next sentence prediction, but it's mostly intended to be fine-tuned on a downstream task. See the model hub to look for fine-tuned versions on a task that interests you.

Note that this model is primarily aimed at being fine-tuned on tasks that use the whole sentence (potentially masked) to make decisions, such as sequence classification, token classification or question answering. For tasks such as text generation you should look at model like GPT2.

## How to use
You can use this model directly with a pipeline for masked language modeling:
`

const IndividualModelPage = () => {
    return (
        <div>
            <div className="bg-violet-50 py-20">
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <div>
                            <h1 className="font-mono text-3xl font-semibold">C2TAM</h1>
                        </div>
                        <div className="mt-3">
                            <Labels tasks={tasks} papers={papers} 
                            sensors={sensors} licenses={licenses} limit={100} />
                        </div>
                    </div>
                    <div className="space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm 
                            text-base rounded-md text-white bg-violet-600 hover:bg-violet-700 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            <CodeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                            Use in Shade Client
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm 
                            text-base rounded-md text-white bg-gray-700 hover:bg-gray-800 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <svg
                                className="w-5 h-5 mr-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View GitHub Source
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 divide-x ">
                <div className="col-span-4 py-16 max-w-4xl mx-auto">
                    <Markdown>
                        {text}
                    </Markdown>
                </div>
                <div className="col-span-2 divide-y">
                    <div className="pl-10 pr-16 py-10 flex items-center space-x-4">
                        <div>
                            <h1 className="">Docker Pulls from Last Month</h1>
                            <h1 className="font-bold text-lg mt-1">125,000</h1>
                        </div>
                        <div className="pt-4 flex-1">
                            <Sparklines data={generateRandomData()}>
                                <SparklinesLine style={{strokeWidth: 1.5, stroke: '#7a3cd9', fill: 'none'}} />
                            </Sparklines>
                        </div>
                    </div>
                    <div className="pl-10 pr-16 py-10">
                        <h1 className="font-bold text-lg mb-4">Getting Started with Docker Container in ROS2</h1>
                        <Markdown language="bash">
                            {result}
                        </Markdown>
                        <p className="mt-4 text-sm text-gray-600">For easier set up and installation, use our <a className="text-violet-500">Shade Client</a></p>
                        <p className="text-sm text-gray-600 mt-1">More information on using Docker on <a className="text-blue-500">GitHub</a></p>
                    </div>
                    <div className="pl-10 pr-16 py-10">
                        <h1 className="text-lg font-bold">Associated Papers</h1>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                        <PaperTag text="arxiv:0234:231423" />
                        <PaperTag text="arxiv:234:1234" />
                        <PaperTag text="arxiv:51:932" />
                        <PaperTag text="arxiv:9375:42569" />
                        </div>
                        
                    </div>
                    <div className="pl-10 pr-16 py-10">
                        <h1 className="text-lg font-bold">Contributed By</h1>
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center p-3.5 rounded-full border-gray-200 border">
                                    <Image
                                        height={15}
                                        width={15}
                                        src="/logo.svg"
                                        alt="logo"
                                    />
                                </div>
                                <h1 className="font-semibold">Shade Robotics</h1>
                            </div>
                            <p>Published 09/25/21</p>
                        </div>
                        <p className="mt-4 text-gray-600">Shade robotics is creating a modern serverless platform without hardware limitations for robots</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualModelPage;