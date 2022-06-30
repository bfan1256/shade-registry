const LicenseTag = ({ text }: { text: string }) => {
    return (
        <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                {text}
            </span>
        </div>
    );
}

export default LicenseTag;