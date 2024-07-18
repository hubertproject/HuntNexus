import Logo from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
// import { IoIosArrowRoundForward } from "react-icons/io";

const Main = () => {

    const navigation = [
        {
            head: 'For Candidates',
            href: "#",
            children: [
                { name: 'Browse Jobs', href: '#' },
                { name: 'Add Resume', href: '#' },
                { name: 'Job Alerts', href: '#' }
            ]
        },
        {
            head: 'For Employers',
            href: "#",
            children: [
                { name: 'Post Job', href: '#' },
                { name: 'Post a Task', href: '#' },
                { name: 'Browse Candidates', href: '#' }
            ]
        },
        {
            head: 'Helpful Links',
            href: "#",
            children: [
                { name: 'Contact', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Use', href: '#' }
            ]
        },
        {
            head: 'Account',
            href: "#",
            children: [
                { name: 'Signin', href: '#' },
                { name: 'Signup', href: '#' },
                { name: 'My Account', href: '#' }
            ]
        },
    ]

    return (
        <div className="p-4  bg-gray-800">

            <div className="-mt-6 flex p-8">
                <div className="w-1/2">
                    <img src={Logo} className='h-16 w-auto' />
                </div>
                <div className="w-1/2 flex justify-end items-center text-primary gap-6">
                    <div className='flex items-center gap-4 text-gray-200'>
                        <FaFacebookF className='w-4 h-4' />
                        <FaXTwitter className='w-4 h-4' />
                        <FaInstagram className='w-5 h-5' />
                        <MdOutlineMailOutline className='w-5 h-5' />
                        <FaLinkedinIn className='w-5 h-5' />
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="-mt-2 md:flex grid grid-cols-2 items-center md:gap-32 gap-14 text-white md:ml-32 ml-4 pb-6">
                {navigation.map((item, index) => (
                    <div key={index}>
                        <a href={item.href} className=" font-quicksand font-medium text-lg">
                            {item.head}
                        </a>
                        {item.children.length > 0 && (
                            <div className=" mt-3 rounded-md -ml-4">
                                {item.children.map((child, childIndex) => (
                                    <a
                                        key={childIndex}
                                        href={child.href}
                                        className="block mt-3 pl-4 text-sm font-quicksand hover:text-primary "
                                    >
                                        {child.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* <div className='md:-ml-6 md:-mt-2'>
                    <div className='flex items-center md:gap-3 gap-4 text-white'>
                        <MdOutlineMailOutline className='md:h-5 md:w-5 h-6 w-6' />
                        <h2 className='font-quicksand md:text-lg text-center'>Sign Up For a Newsletter</h2>
                    </div>
                    <p className='font-quicksand text-xs md:max-w-[250px] max- mt-2'>
                        Weekly breaking news, analysis and cutting edge advices
                        on job searching.
                    </p>
                    <div className='-mt-2 flex items-center gap-2'>
                        <input
                            type="text"
                            id="location"
                            className="border border-gray-50 bg-gray-800 text-sm px-6 py-3 pl-4 md:mt-6 mt-4 rounded-sm focus:outline-none font-quicksand"
                            placeholder="Email Address"
                        />
                        <button className="bg-primary text-white px-5 py-4 mt-6 rounded-sm font-quicksand">
                            <IoIosArrowRoundForward />
                        </button>

                    </div>

                </div> */}
            </div>

            <div className='mt-6 text-center mb-4'>
                <p className='font-quicksand text-white'>
                    © 2023 <span className='text-primary'>Real Gangsters</span>. All Rights Reserved.
                </p>
            </div>

        </div>
    )
}
export default Main;