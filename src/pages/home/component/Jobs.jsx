import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineLocationCity } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { RiBriefcase4Line } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { GiFarmTractor } from "react-icons/gi";
import { GiLighthouse } from "react-icons/gi";

const Main = () => {
    const data = [
        {
            logo: <IoCodeSlash className="h-14 w-14" />,
            title: "Ploughing, Planting and Spraying",
            city: <MdOutlineLocationCity />,
            head: "Ho Municipal",
            locate: <IoLocationOutline />,
            location: "Ho Bankoe",
            duration: <RiBriefcase4Line />,
            durate: "Full Time",
            clock: <LuClock />,
            time: "2 days"
        },
        {
            logo: <GiFarmTractor className="h-14 w-14" />,
            title: "Clearing, Weeding and Spraying",
            city: <MdOutlineLocationCity />,
            head: "Ho Municipal",
            locate: <IoLocationOutline />,
            location: "Kpetoe",
            duration: <RiBriefcase4Line />,
            durate: "Part Time",
            clock: <LuClock />,
            time: "2 days"
        },
        {
            logo: <GiLighthouse className="h-14 w-14" />,
            title: "Weeding, Treaming and Gradening",
            city: <MdOutlineLocationCity />,
            head: "Ho Municipal",
            locate: <IoLocationOutline />,
            location: "Lokoe",
            duration: <RiBriefcase4Line />,
            durate: "Part Time",
            clock: <LuClock />,
            time: "2 days"
        }
    ];


    return (
        <div className="bg-gray-100">
            <div className="mt-4 flex p-8">
                <div className="w-1/2">
                    <h2 className="font-quicksand text-2xl text-gray-600 font-medium">Featured Jobs</h2>
                </div>
                <button className="w-1/2 flex justify-end items-center text-primary gap-1">
                    <h2 className="font-quicksand font-medium">Browse All Jobs</h2>
                    <IoIosArrowRoundForward />
                </button>
            </div>

            <div className=" p-8 -mt-6 ">
                {data.map((item, index) => (
                    <div key={index}
                        className={`md:flex md:p-6 p-8 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                            } md:hover:border-l-4 md:border-primary cursor-pointer`}
                    // className="flex bg-white p-6 mt-1 hover:border-l-4 border-primary cursor-pointer"
                    >
                        <div className="md:w-1/2 md:flex items-center gap-4">
                            <h2 className="bg-primary text-white p-3 rounded-md hidden md:block">{item.logo}</h2>
                            <div className="">
                                <h2 className="font-quicksand md:-mt-2 -mt-2 md:text-xl text-lg font-semibold text-gray-500">{item.title}</h2>
                                <div className="md:mt-2 mt-4 md:flex grid grid-cols-2 items-center gap-4">
                                    <div className="flex text-gray-500 items-center gap-1">
                                        <h2>{item.city}</h2>
                                        <h2 className="font-quicksand text-sm">{item.head}</h2>
                                    </div>

                                    <div className="flex text-gray-500 items-center gap-1">
                                        <h2>{item.locate}</h2>
                                        <h2 className="font-quicksand text-sm">{item.location}</h2>
                                    </div>

                                    <div className="flex text-gray-500 items-center gap-1">
                                        <h2>{item.duration}</h2>
                                        <h2 className="font-quicksand text-sm">{item.durate}</h2>
                                    </div>

                                    <div className="flex text-gray-500 items-center gap-1">
                                        <h2>{item.clock}</h2>
                                        <h2 className="font-quicksand text-sm">{item.time}</h2>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="w-full flex justify-center md:w-1/2 md:justify-end items-center md:mt-0 mt-6 md:mb-0 -mb-2 gap-1">
                            <button className="font-quicksand bg-primary text-white p-3 w-full md:w-auto rounded-md">
                                Apply Now!
                            </button>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}
export default Main;