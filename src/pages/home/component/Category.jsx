import { IoCodeSlash } from "react-icons/io5";
import { BsCloudDownload, BsSuitcaseLg, BsMegaphone } from "react-icons/bs";
import { SlPencil, SlPicture } from "react-icons/sl";
import { BiPieChartAlt2 } from "react-icons/bi";
import { PiGraduationCap } from "react-icons/pi";

const Main = () => {
    const data = [
        {
            icon: <IoCodeSlash className="h-12 w-12" />,
            figure: 120,
            title: "Web & Software Development",
            description: "Software Engineer, Web/Mobile Developer, and More",
        },
        {
            icon: <BsCloudDownload className="h-12 w-12" />,
            figure: 125,
            title: "Data Science & Analytics",
            description: "Data Specialist/Scientist, Data Analyst, and More",
        },
        {
            icon: <BsSuitcaseLg className="h-12 w-12" />,
            figure: 105,
            title: "Accounting & Consulting",
            description: "Auditor, Accountant, Financial Analyst, and More",
        },
        {
            icon: <SlPencil className="h-12 w-12 " />,
            figure: 115,
            title: "Writing & Translation",
            description: "Copywriter, Creative Writer, Translator, and More",
        },
        {
            icon: <BiPieChartAlt2 className="h-12 w-12" />,
            figure: 125,
            title: "Sales & Marketing",
            description: "Brand Manager, Marketing Coordinator, and More",
        },
        {
            icon: <SlPicture className="h-12 w-12" />,
            figure: 130,
            title: "Graphics & Design",
            description: "Creative Director, UI/UX Designer, and More",
        },
        {
            icon: <BsMegaphone className="h-12 w-12" />,
            figure: 110,
            title: "Digital Marketing",
            description: "Marketing Analyst, Social Profile Admin, and More",
        },
        {
            icon: <PiGraduationCap className="h-12 w-12" />,
            figure: 110,
            title: "Education & Training",
            description: "Advisor, Coach, Education Coordinator, and More",
        },
    ];

    return (
        <div className="p-8">
            <h2 className="mt-8 font-quicksand text-2xl text-gray-500 font-semibold text-center mb-6">Popular Job Categories</h2>
            <div className="md:grid md:grid-cols-4 gap-8">
                {data.map((item, index) => (
                    <div key={index} className="gap-2 mt-6 p-4 cursor-pointer rounded-lg text-gray-500 md:hover:bg-primary md:hover:text-white">
                        <h2 className="md:ml-[6.5rem] ml-[8rem] mb-4">{item.icon}</h2>
                        <p className="font-bold text-center font-quicksand text-sm">{item.figure}</p>
                        <p className="mt-3 font-quicksand text-md font-semibold text-center">{item.title}</p>
                        <p className=" mt-3 font-quicksand text-sm text-center">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;