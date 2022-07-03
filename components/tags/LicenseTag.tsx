import { useRouter } from "next/router";

const LicenseTag = ({ text }: { text: string }) => {
    const router = useRouter()
    return (
        <div className="cursor-pointer" onClick={() => router.push(`?query=${text}`)}>
            <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                {text}
            </span>
        </div>
    );
}

export default LicenseTag;