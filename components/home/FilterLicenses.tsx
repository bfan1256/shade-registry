const FilterLicenses = () => {
    return (
        <div>
            <h1 className="font-semibold text-lg">Licenses</h1>
            <div className="flex flex-wrap w-full items-center gap-2 mt-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    apache-2.0
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    GPL-3.0
                </span>
            </div>
        </div>
    );
}

export default FilterLicenses;