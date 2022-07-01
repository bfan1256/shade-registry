const PaperTag = ({ text, url }: { text: string, url: string }) => {
    return (
        <div>
            <a href={url} target="_blank" 
                className="inline-flex hover:bg-violet-200 transition items-center px-2.5 py-1 rounded text-xs font-medium bg-violet-100 text-violet-800" rel="noreferrer">
                {text}
            </a>
        </div>
    );
}

export default PaperTag;