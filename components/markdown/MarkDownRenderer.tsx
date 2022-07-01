import { ReactNode, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ClipboardCopyIcon as DarkClipboardCopyIcon } from '@heroicons/react/solid'
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import rehypeRaw from 'rehype-raw'


export let LANGUAGES: string[] = []
const registerLanguage = (name: string, func: any) => {
    SyntaxHighlighter.registerLanguage(name, func)
    LANGUAGES.push(name)
}


registerLanguage('tsx', tsx)
registerLanguage('typescript', typescript)
registerLanguage('scss', scss)
registerLanguage('bash', bash)
registerLanguage('markdown', markdown)
registerLanguage('json', json)
registerLanguage('python', python)

const RenderMarkdownCode = ({
    inline,
    language,
    children,
    className,
    props

}: { inline?: boolean, language?: string, children?: ReactNode, className?: string, props?: any }) => {
    const [isCopied, setIsCopied] = useState(false)
    const copy = () => {
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 1000)
    }
    if (inline) return (
        <code className={className} {...props}>
            {children}
        </code>
    )

    const code = String(children).replace(/\n$/, '')
    return (
        <div>
            <CopyToClipboard text={code}>
                <button className="hover:bg-gray-700 rounded p-2 w-8 float-right text-white"
                    onClick={() => copy()}>
                    {isCopied
                        ? <span title="Copied!"><DarkClipboardCopyIcon/></span>
                        : <span title="Copy to Clipboard"><ClipboardCopyIcon/></span>
                    }
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter
                // @ts-ignore
                style={atomDark}
                customStyle={{ background: 'transparent', padding: '5px' }}
                language={language}
                PreTag="div"
                {...props}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export const Markdown = ({ children }: { children: string }) => {

    return (
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="flex-auto max-w-full break-all sm:break-normal prose prose-md hover:prose-a:text-blue-500 prose-a:text-blue-600 prose-h1:text-3xl prose-h1:mt-8 markdown"
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    let language = 'bash'
                    if (match) {
                        language = match[1]
                    }

                    return (
                        <RenderMarkdownCode
                            language={language}
                            inline={inline}
                            className={className}
                            props={props}>
                            {children}
                        </RenderMarkdownCode>
                    )
                }
            }}
        >
            {children}
        </ReactMarkdown>
    )
}
