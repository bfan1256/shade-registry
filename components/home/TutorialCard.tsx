import Image from 'next/image'

const TutorialCard = () => {
    return (
        <div className="shadow-md 
            shadow-violet-100
            flex
            flex-col
            h-full
            rounded-md relative border p-7 sm:p-9 
            border-violet-300 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
            <div className="flex-shrink-0 flex items-center">
                <button className="items-center flex space-x-4">
                    <Image
                        height={25}
                        width={25}
                        src="/logo.svg"
                        alt="logo"
                    />
                    <h1 className="text-lg mt-1 uppercase font-bold tracking-wide">Shade</h1>
                </button>
            </div>
            <div className='space-y-2 mt-4 flex flex-col h-full'>
                <p className='text-sm text-violet-500'>Tutorial</p>
                <h1 className='text-xl sm:text-2xl font-bold flex-1 w-3/5'>Making the most of Shade&apos;s models and datasets</h1>
                <p className='text-sm text-gray-500'>2 min read</p>
            </div>
            <div className="hidden sm:block absolute right-1 -bottom-5">
                <Image
                    height={250}
                    width={250}
                    src="/Construction.svg"
                    alt="construction"
                />
            </div>
            <div className="block sm:hidden absolute right-1 -bottom-5">
                <Image
                    height={175}
                    width={175}
                    src="/Construction.svg"
                    alt="construction"
                />
            </div>

        </div>
    );
}

export default TutorialCard;