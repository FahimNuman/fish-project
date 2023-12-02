

const Cuppon = () => {
    

    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img
                    src="https://source.unsplash.com/random/300x300/?1"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="mt-6 mb-2">
                      <h2 className="text-xl font-semibold tracki">Nam maximus purus</h2>
                </div>
                    {/* Button */}
                    <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">New</span>
                   
                <button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-red-500 text-white dark:text-gray-900">
    Apply Coupon
    <span className="absolute top-0 right-0 px-5 py-1 text-xs tracki text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">New</span>
</button>


            </div>
        </div>
    );
};

export default Cuppon;
