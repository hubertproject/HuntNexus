import { IoLocationOutline } from "react-icons/io5";


const Main = () => {
    return (
        <div className="p-4">
            <div className="md:mt-[6rem] mt-12 md:pl-24 md:p-0 p-2">
                <h2 className="font-quicksand font-semibold md:text-3xl text-3xl text-gray-700">
                    Hire experts or be hired for any job, any time.
                </h2>
                <p className="font-quicksand md:text-2xl text-md md:mt-2 mt-4 md:max-w-[600px] max-w-[500px] text-gray-600">
                    Thousands of small businesses use <span className="text-primary">WorkSeek</span> to turn their ideas into reality.
                </p>

                <div className="mt-12 md:flex items-center gap-2">
                    <div className="relative ">
                        <div>
                            <label htmlFor="location" className="absolute top-[-1.5rem] font-quicksand text-white pt-1 pb-1 pl-2 pr-2 rounded-md bg-primary">
                                Where?
                            </label>
                        </div>
                        <div className="md:mt-6">
                            <IoLocationOutline className="absolute left-3 md:mt-6 mt-10 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                id="location"
                                className="border border-gray-300 px-4 py-3 pl-10 md:mt-0 mt-4  rounded-sm md:w-[30rem] w-[23rem] focus:outline-none font-quicksand"
                                placeholder="Online Jobs"
                            />
                        </div>

                    </div>
                    <div className="relative md:mt-0 mt-12">
                        <label htmlFor="location" className="absolute  top-[-1.5rem] font-quicksand text-white pt-1 pb-1 pl-2 pr-2 rounded-md bg-primary">
                            What Job you want?
                        </label>
                        <input
                            type="text"
                            id="location"
                            className="border border-gray-300 px-4 py-3 pl-4 md:mt-6 mt-4 rounded-sm md:w-[30rem] w-[23rem] focus:outline-none font-quicksand"
                            placeholder="Job Title or Keywords"
                        />
                    </div>
                    <button className="bg-primary text-white px-4 py-3 md:mt-6 mt-2 rounded-sm font-quicksand">Search</button>
                </div>

                <div className="md:mt-10 mt-8 flex items-center gap-12 md:p-0 p-2">
                    <div className="border-r-2 border-gray-300 pr-5">
                        <h2 className="font-quicksand text-3xl font-semibold text-gray-700">1,586</h2>
                        <p className="font-quicksand md:text-md text-xs">Jobs Posted</p>
                    </div>
                    <div className="border-r-2 border-gray-300 pr-6">
                        <h2 className="font-quicksand text-3xl font-semibold text-gray-700">3,543</h2>
                        <p className="font-quicksand md:text-md text-xs">Tasks Posted</p>

                    </div>
                    <div>
                        <h2 className="font-quicksand text-3xl font-semibold text-gray-700">1,232</h2>
                        <p className="font-quicksand md:text-md text-xs">Freelancers</p>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Main;