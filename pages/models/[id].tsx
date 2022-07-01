import { Markdown } from "@/components/markdown/MarkDownRenderer";
import Dropdown from "@/components/model/Dropdown";
import Labels from "@/components/model/Labels";
import PaperTag from "@/components/tags/PaperTag";
import { getModel, getModels, incrementModelView } from "@/libs/firebase/registry";
import { Model } from "@/types/model";
import { CodeIcon, CubeIcon, DownloadIcon, EyeIcon } from "@heroicons/react/solid";
import moment from "moment";
import Image from 'next/image'
import { useCallback, useEffect, useState } from "react";
import {Sparklines, SparklinesLine} from 'react-sparklines'


const tasks = ['image-classification'];
const papers = ['arxiv:202341'];
const licenses = ['gpl-3.0'];
const sensors: string[] = [];

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

const IndividualModelPage = ({ model, markdown, commands, pulls }: { model: Model, markdown: string, commands: string[], pulls: number }) => {
    const [currentCommand, setCurrentCommand] = useState('')

    const setNewCommand = useCallback((tag: string) => {
        const match = commands.find((element: any) => {
            if (element.includes(tag)) {
              return true;
            }
          });
        if (match) {
            setCurrentCommand(match)
        }
    }, [commands])
    useEffect(() => {
        if (commands) {
            setCurrentCommand(commands[0])
        }
    }, [commands])
    useEffect(() => {
        if (model) {
            incrementModelView(model.id)
        }
    }, [model])

    if (model === undefined) {
        return (
            <div></div>
        )
    }


    
    return (
        <div>
            <div className="bg-violet-50 py-20">
                <div className="md:px-24 mx-auto px-6 flex sm:flex-row flex-col sm:items-center justify-between">
                    <div>
                        <div>
                            <h1 className="font-mono text-3xl font-semibold">{model.name}</h1>
                        </div>
                        <div className="mt-3">
                            <Labels tasks={model.tasks} papers={model.papers} 
                            sensors={model.sensors} license={model.license} limit={100} />
                        </div>
                    </div>
                    <div className="flex items-center mt-5 lg:mt-0 flex-col space-y-2 w-full sm:w-auto lg:space-y-0 lg:flex-row lg:space-x-3">
                        <button
                            type="button"
                            className="inline-flex w-full sm:w-auto items-center px-4 py-2 border border-transparent shadow-sm 
                            text-base rounded-md text-white bg-violet-600 hover:bg-violet-700 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            <CodeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                            Use in Shade Client
                        </button>
                        <a
                            href={model.github}
                            target="_blank"
                            className="inline-flex w-full sm:w-auto items-center px-4 py-2 border border-transparent shadow-sm 
                            text-base rounded-md text-white bg-gray-700 hover:bg-gray-800 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" rel="noreferrer"
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
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid px-6 md:px-24 xl:px-0 grid-cols-1 lg:grid-cols-6 lg:divide-x">
                <div className="lg:col-span-4 pb-16 pt-3 xl:px-24 lg:pr-12">
                    <Markdown>
                        {markdown}
                    </Markdown>
                </div>
                <div className="lg:col-span-2 divide-y order-first lg:order-last">
                    <div className="lg:pl-10 xl:pr-16 py-10 flex justify-between xl:flex-row flex-col space-y-8 xl:space-y-0 xl:items-center xl:space-x-8">
                        <div>
                            <h1 className="font-bold text-lg flex items-center"><CubeIcon className="w-6 h-6 mr-3 mb-1" /> Model Stats</h1>
                        </div>
                        <div className="flex items-center space-x-10">
                            <div>
                                <h1 className="flex items-center">Total Views</h1>
                                <h1 className="font-bold text-lg mt-1 flex items-center"><EyeIcon className="w-5 h-5 mr-2" /> {model.views}</h1>
                            </div>
                            <div>
                                <h1 className="">Total Docker Pulls</h1>
                                <h1 className="font-bold text-lg mt-1 flex items-center"><DownloadIcon className="w-5 h-5 mr-2" />{pulls}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pl-10 xl:pr-16 py-10">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="font-bold text-lg">Get Started w/ Docker in ROS2</h1>
                            <Dropdown tags={commands.map((command: string) => command.split(':')[1])} update={(tag: string) => setNewCommand(tag)} />
                        </div>
                        <Markdown>
                            {currentCommand}
                        </Markdown>
                        <p className="mt-4 text-sm text-gray-600">For easier set up and installation, use our <a className="text-violet-500">Shade Client</a></p>
                        <p className="text-sm text-gray-600 mt-1">More information on using Docker on <a href={model.github} target="_blank" className="text-blue-500" rel="noreferrer">GitHub</a></p>
                    </div>
                    <div className="lg:pl-10 lg:pr-16 py-10">
                        <h1 className="text-lg font-bold">Associated Papers</h1>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                        {model.papers.map((paper) => (
                            <PaperTag key={paper.name} text={paper.name} url={paper.url}/>
                        ))}
                        </div>
                        
                    </div>
                    <div className="lg:pl-10 xl:pr-16 py-10">
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
                                <h1 className="font-semibold">{model.contributed.name}</h1>
                            </div>
                            <p>Published {model.lastUpdated}</p>
                        </div>
                        <p className="mt-4 text-gray-600">{model.contributed.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps({params}: any) {
    const model = await getModel(params.id)
    if (!model) {
        return
    }

    const githubSlug = model?.github.split('github.com/')[1]
    const res = await fetch(`https://raw.githubusercontent.com/${githubSlug}/main/README.md`)
    let markdown = await res.text()

    if (markdown.indexOf('404: Not Found') !== -1) {
        const res = await fetch(`https://raw.githubusercontent.com/${githubSlug}/master/README.md`)
        markdown = await res.text()
    }

    const repository = model.docker.split('/').pop()

    const dockerReq = await fetch(`https://hub.docker.com/v2/repositories/shaderobotics/${repository}/tags`)
    const response = await dockerReq.json()
    const tags = response['results']

    const repositoryReq = await fetch(`https://hub.docker.com/v2/repositories/shaderobotics/${repository}`)
    const repositoryResponse = await repositoryReq.json()
    const pulls = repositoryResponse['pull_count']
    const commands = tags.map((tag: any) => {
        return `\`\`\`bash 
docker pull ${model.docker.split('/r/')[1]}:${tag.name}`
    })

    model.lastUpdated = moment(model?.lastUpdated.toDate()).format('LL')
    return {
      props: {
        model,
        commands,
        markdown,
        pulls,
      },
      revalidate: 60,
    }
  }

export async function getStaticPaths() {
    const models = await getModels()
  
    return {
      paths: models?.map((model: Model) => `/models/${model.name}`) || [],
      fallback: true,
    }
}



export default IndividualModelPage;