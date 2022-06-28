const PaperTag = ({ text }: { text: string }) => {
    return (
        <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-violet-100 text-violet-800">
                {text}
            </span>
        </div>
    );
}

export default PaperTag;