import {Markdown} from "@/components/markdown/MarkDownRenderer";
import Dropdown from "@/components/model/Dropdown";
import Labels from "@/components/model/Labels";
import PaperTag from "@/components/tags/PaperTag";
import {getModel, getModels, incrementModelView} from "@/libs/firebase/registry";
import {Model} from "@/types/model";
import {CodeIcon, CubeIcon, DownloadIcon, EyeIcon} from "@heroicons/react/solid";
import moment from "moment";
import Head from 'next/head'
import Image from 'next/image'
import {useCallback, useEffect, useState} from "react";

const IndividualModelPage = ({
                                 model,
                                 markdown,
                                 commands,
                                 pulls
                             }: { model: Model, markdown: string, commands: string[], pulls: number }) => {
    // TODO fix bastardization of state
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
            <div></div> // TODO 404 in getStaticProps instead
        )
    }

    const title = `${model.name} | Shade Registry`


    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="description"
                      content={`Ready-to-use Integration of ${model.name} via Shade Client or Docker ROS2 Wrapper. ${model.description}`}/>
                <meta property="og:description"
                      content={`Ready-to-use Integration of ${model.name} via Shade Client or Docker ROS2 Wrapper. ${model.description}`}/>
                <meta property="og:title" content={title}/>
                <meta property="og:image" content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL ?? 'localhost:3000'}/api/og-image?title=${model.docker}`}/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description"
                      content={`Ready-to-use Integration of ${model.name} via Shade Client or Docker ROS2 Wrapper. ${model.description}`}/>
            </Head>
            <div className="bg-violet-50 py-20">
                <div className="md:px-24 mx-auto px-6 flex sm:flex-row flex-col sm:items-center justify-between">
                    <div>
                        <div>
                            <h1 className="font-mono text-3xl font-semibold">{model.name}</h1>
                        </div>
                        <div className="mt-3">
                            <Labels tasks={model.tasks} papers={model.papers}
                                    sensors={model.sensors} license={model.license} limit={100}/>
                        </div>
                    </div>
                    <div
                        className="flex items-center mt-5 lg:mt-0 flex-col space-y-2 w-full sm:w-auto lg:space-y-0 lg:flex-row lg:space-x-3">
                            <Markdown>
                                {currentCommand}
                            </Markdown>
                        {/* <button
                            type="button"
                            className="inline-flex w-full sm:w-auto items-center px-4 py-2 border border-transparent shadow-sm 
                            text-base rounded-md text-white bg-violet-600 hover:bg-violet-700 
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            <CodeIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true"/>
                            Use in Shade Client
                        </button> */}
                    </div>
                </div>
            </div>
            <div className="grid px-6 md:px-24 xl:px-0 grid-cols-1 lg:grid-cols-8 lg:divide-x">
                <div className="lg:col-span-5 pb-16 pt-3 xl:px-24 lg:pr-12">
                <a
                            href={model.github}
                            target="_blank"
                            className="float-right mb-8 inline-flex w-full sm:w-auto items-center px-4 py-2 mt-7 border border-transparent
                            text-base rounded-md text-gray-500 border-gray-200 hover:bg-gray-50
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" rel="noreferrer"
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
                    <Markdown>
                        {markdown}
                    </Markdown>
                </div>
                <div className="lg:col-span-3 divide-y order-first lg:order-last">
                    <div
                        className="lg:pl-10 xl:pr-16 py-10 flex justify-between xl:flex-row flex-col space-y-8 xl:space-y-0 xl:items-center xl:space-x-8">
                        <div>
                            <h1 className="font-bold text-lg flex items-center"><CubeIcon
                                className="w-6 h-6 mr-3 mb-1"/> Model Stats</h1>
                        </div>
                        <div className="flex items-center space-x-10">
                            <div>
                                <h1 className="flex items-center">Total Views</h1>
                                <h1 className="font-bold text-lg mt-1 flex items-center"><EyeIcon
                                    className="w-5 h-5 mr-2"/> {model.views}</h1>
                            </div>
                            <div>
                                <h1 className="">Total Docker Pulls</h1>
                                <h1 className="font-bold text-lg mt-1 flex items-center"><DownloadIcon
                                    className="w-5 h-5 mr-2"/>{pulls}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pl-10 xl:pr-8 py-10">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="font-bold text-lg">Get Started w/ Docker in ROS2</h1>
                            <Dropdown tags={commands.map((command: string) => command.split(':')[1])}
                                      update={(tag: string) => setNewCommand(tag)}/>
                        </div>
                        <Markdown>
                            {currentCommand}
                        </Markdown>
                        {/* <p className="mt-4 text-sm text-gray-600">For easier set up and installation, use our <a
                            className="text-violet-500">Shade Client</a></p> */}
                        <p className="text-sm text-gray-600 mt-3">More information on using Docker on <a
                            href={model.github} target="_blank" className="text-blue-500" rel="noreferrer">GitHub</a>
                        </p>
                    </div>
                    {
                        model.papers && (
                            <div className="lg:pl-10 lg:pr-16 py-10">
                                <h1 className="text-lg font-bold">Associated Papers</h1>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                    {model.papers.map((paper) => (
                                        <PaperTag key={paper.name} text={paper.name} url={paper.url}/>
                                    ))}
                                </div>

                            </div>
                        )
                    }
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

// TODO add typing
export async function getStaticProps({params}: any) {
    // TODO cleanup
    const model = await getModel(params.id)

    if (model && !model.description) {
        model.description = 'No Description'
    }
    
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
docker pull ${model.docker.split('/shaderobotics/')[1]}:${tag.name}`
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
      paths: models?.map((model: Model) => `/models/${model.id}`) || [],
      fallback: true,
    }
}


export default IndividualModelPage;
