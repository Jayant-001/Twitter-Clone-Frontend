import React from "react";
import { BiLogOut } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import XSvg from "../svgs/X";
import Image from "next/image";

const SideBar = () => {
    return (
        <div className="md:flex-[2_2_0] w-18 max-w-52">
            <div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-20 md:w-full">
                <Link href="/" className="flex justify-center md:justify-start">
                    <XSvg className="px-2 w-12 h-12 rounded-full hover:bg-slate-200" />
                </Link>
                <ul className="flex flex-col gap-3 mt-4">
                    <li className="flex justify-center md:justify-start border-b">
                        <Link
                            href="/"
                            className="flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                        >
                            <MdHomeFilled className="w-8 h-8" />
                            <span className="text-lg hidden md:block">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="flex justify-center md:justify-start border-b">
                        <Link
                            href="/notifications"
                            className="flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                        >
                            <IoNotifications className="w-6 h-6" />
                            <span className="text-lg hidden md:block">
                                Notifications
                            </span>
                        </Link>
                    </li>

                    <li className="flex justify-center md:justify-start border-b">
                        <Link
                            href={`/profile/abcd`}
                            className="flex gap-3 items-center hover:bg-slate-200 transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer"
                        >
                            <FaUser className="w-6 h-6" />
                            <span className="text-lg hidden md:block">
                                Profile
                            </span>
                        </Link>
                    </li>
                </ul>
                <Link
                    href={`/profile/abcd`}
                    className="mt-auto mb-10 flex gap-2 border shadow items-start transition-all duration-300 hover:bg-[#181818] py-2 px-4 rounded-full"
                >
                    <div className="avatar hidden md:inline-flex">
                        <div className="">
                            <Image
                                className="rounded-full"
                                alt="profile image"
                                height={36}
                                width={36}
                                src={"/avatar-placeholder.png"}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between flex-1">
                        <div className="hidden md:block">
                            <p className="font-bold text-sm w-20 truncate">
                                Jayant Gupta
                            </p>
                            <p className="text-slate-500 text-sm">
                                jayant_kr_gupta
                            </p>
                        </div>
                        <BiLogOut className="w-5 h-5 cursor-pointer" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
