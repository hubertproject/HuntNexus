import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import { MdOutlineMail } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Logo from '../../assets/logo.png'
import { useState } from 'react';

const navigation = [
    {
        name: 'Home',
        href: '#',
        current: true,
        children: []
    },
    {
        name: 'Find Work',
        href: '#',
        current: false,
        children: [
            { name: 'Job Search', href: '#' },
            { name: 'Resume Upload', href: '#' },
            { name: 'Saved Jobs', href: '#' }
        ]
    },
    {
        name: 'For Employers',
        href: '#',
        current: false,
        children: [
            { name: 'Post a Job', href: '#' },
            { name: 'Applicant Tracking', href: '#' },
            { name: 'Employer Resources', href: '#' }
        ]
    },
    {
        name: 'Dashboard',
        href: '#',
        current: false,
        children: [
            { name: 'Profile', href: '#' },
            { name: 'Settings', href: '#' },
            { name: 'Notifications', href: '#' }
        ]
    },
    {
        name: 'Pages',
        href: '#',
        current: false,
        children: [
            { name: 'About Us', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'FAQ', href: '#' }
        ]
    }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {

    const [activeItem, setActiveItem] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };

    const handleMouseLeave = () => {
        setActiveItem(null);
    };


    return (
        <Disclosure as="nav" className="bg-white border shadow-lg p-4">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center md:border-gray-400 md:border-r-2 pr-4">
                                    <img
                                        className="h-16 w-auto"
                                        src={Logo}
                                        alt="Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block md:mt-3">
                                    <div className="flex space-x-4">
                                        {navigation.map((item, index) => (
                                            <div
                                                key={item.name}
                                                className="relative group"
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'text-primary' : 'text-gray-600 hover:text-primary',
                                                        'px-3 py-2 text-md font-quicksand font-medium gap-2 flex items-center'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                    <span>
                                                        <MdKeyboardArrowDown className="h-3 w-3" />
                                                    </span>
                                                </a>
                                                {activeItem === index && (
                                                    <div className="absolute mt-2 space-y-2 bg-white shadow-lg rounded-md py-2 p-3 w-48">
                                                        {item.children.map((child) => (
                                                            <a
                                                                key={child.name}
                                                                href={child.href}
                                                                className="block px-4 py-2 text-sm text-gray-700 font-quicksand hover:bg-gray-100"
                                                            >
                                                                {child.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 gap-2 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-primary p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6 " aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 md:w-56 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className='mt-3 gap-6 p-1 justify-center text-center mb-1'>
                                                <button className='mr-8 bg-green-600 font-quicksand text-white text-sm pl-2 pr-2 pt-1 pb-1 rounded-md'>
                                                    Online
                                                </button>
                                                <button className='bg-gray-900 font-quicksand text-white pl-2 text-sm pr-2 pt-1 pb-1 rounded-md'>
                                                    Offline
                                                </button>
                                            </div>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100 ' : '', 'block px-4 py-2 text-md text-gray-700 font-quicksand')}
                                                    >
                                                        Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-md font-quicksand text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-md font-quicksand text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-primary' : 'text-gray-600 hover:text-primary',
                                        'block rounded-md px-3 py-2 text-base font-medium font-quicksand gap-2 flex items-center'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}

                                    <span>
                                        <IoIosArrowForward className="h-3 w-3" />
                                    </span>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
export default NavBar;
