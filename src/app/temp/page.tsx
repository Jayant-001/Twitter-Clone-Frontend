"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
    HiCamera,
    HiHeart,
    HiOutlineDotsVertical,
    HiOutlineHeart,
} from "react-icons/hi";
import { IoMdAddCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import Moment from "react-moment";

type Props = {};

const TempPage = (props: Props) => {
    const session = true;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);
    const img = "https://tinypng.com/static/images/george-account-page.webp";

    const posts = [
        {
            profileImg: img,
            username: "jayant2k1",
            image: img,
            caption: "this is post caption",
        },
        {
            profileImg: img,
            username: "jayant2k1",
            image: img,
            caption: "this is post caption",
        },
        {
            profileImg: img,
            username: "jayant2k1",
            image: img,
            caption: "this is post caption",
        },
        {
            profileImg: img,
            username: "jayant2k1",
            image: img,
            caption: "this is post caption",
        },
    ];

    const comments = [
        {
            image: img,
            username: "jayant2k1",
            comment: "this is post comment",
        },
        {
            image: img,
            username: "jayant2k1",
            comment: "this is post comment",
        },
        {
            image: img,
            username: "jayant2k1",
            comment: "this is post comment",
        },
        {
            image: img,
            username: "jayant2k1",
            comment: "this is post comment",
        },
    ];

    return (
        // <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
        //     <div className="flex justify-between items-center max-w-6xl mx-auto">
        //         {/* logo */}

        //         <Link href="/" className="hidden lg:inline-flex">
        //             <Image
        //                 src="/Instagram_logo_black.webp"
        //                 width={96}
        //                 height={96}
        //                 alt="instagram logo"
        //             />
        //         </Link>

        //         <Link href="/" className="lg:hidden">
        //             <Image
        //                 src="/800px-Instagram_logo_2016.webp"
        //                 width={40}
        //                 height={40}
        //                 alt="instagram logo"
        //             />
        //         </Link>

        //         {/* search input */}

        //         <input
        //             type="text"
        //             placeholder="Search"
        //             className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        //         />

        //         {/* menu items */}

        //         {session ? (
        //             <div className="flex gap-2 items-center">
        //                 <IoMdAddCircleOutline
        //                     className="text-2xl cursor-pointer tranform hover:scale-125 transition duration-300 hover:text-red-600"
        //                     onClick={() => setIsOpen(true)}
        //                 />
        //                 <img
        //                     src={img}
        //                     alt="user name"
        //                     className="h-10 w-10 rounded-full cursor-pointer"
        //                 />
        //             </div>
        //         ) : (
        //             <button
        //                 className="text-sm font-semibold text-blue-500"
        //             >
        //                 Log In
        //             </button>
        //         )}
        //     </div>
        //     {isOpen && (
        //         <Modal
        //             isOpen={isOpen}
        //             className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
        //             onRequestClose={() => setIsOpen(false)}
        //             ariaHideApp={false}
        //         >
        //             <div className="flex flex-col justify-center items-center h-[100%]">
        //                 {selectedFile ? (
        //                     <img
        //                         src={img}
        //                         alt="selected file"
        //                         className={`w-full max-h-[250px] object-over cursor-pointer ${
        //                              "animate-pulse"
        //                         }`}
        //                     />
        //                 ) : (
        //                     <HiCamera
        //                         className="text-5xl text-gray-400 cursor-pointer"
        //                     />
        //                 )}
        //                 <input
        //                     hidden
        //                     type="file"
        //                     accept="image/*"
        //                 />
        //             </div>
        //             <input
        //                 type="text"
        //                 maxLength={150}
        //                 placeholder="Please enter you caption..."
        //                 className="m-4 border-none text-center w-full focus:ring-0 outline-none"
        //             />
        //             <button
        //                 className="w-full bg-red-600 text-white p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
        //             >
        //                 Upload Post
        //             </button>
        //             <AiOutlineClose
        //                 className="cursor-pointer absolute top-2 right-2 hover:text-red-600 transition duration-300"
        //                 onClick={() => setIsOpen(false)}
        //             />
        //         </Modal>
        //     )}
        // </div>

        <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
            {/* Posts (Left) */}
            <section className="md:col-span-2">
                <div>
                    {posts.map((post) => (
                        <div className="bg-white my-7 border rounded-md">
                            <div className="flex items-center p-5 border-b border-gray-100">
                                <img
                                    src={post.profileImg}
                                    alt={post.username}
                                    className="h-12 rounded-full object-cover border p-1 mr-3"
                                />
                                <p className="flex-1 font-bold">
                                    {post.username}
                                </p>
                                <HiOutlineDotsVertical className="h-5 cursor-pointer" />
                            </div>
                            <img
                                src={post.image}
                                alt={post.caption}
                                className="object-cover w-full"
                            />
                            <div>
                                {session && (
                                    <div className="flex border-t border-gray-100 px-4 pt-4">
                                        <div className="flex items-center gap-2">
                                            <HiHeart className="text-red-500 cursor-pointer text-3xl  hover:scale-125 transition-transform duration-200 ease-out" />

                                            <HiOutlineHeart className="cursor-pointer text-3xl  hover:scale-125 transition-transform duration-200 ease-out" />
                                            <p className="text-gray-500">
                                                like
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="p-5 truncate">
                                <span className="font-bold mr-2">
                                    {post.username}
                                </span>
                                {post.caption}
                            </p>
                            <div>
                                {comments.length > 0 && (
                                    <div className="mx-10 max-h-24 overflow-y-scroll">
                                        {comments.map((comment, id) => (
                                            <div
                                                key={id}
                                                className="flex items-center space-x-2 mb-2 justify-between"
                                            >
                                                <img
                                                    src={comment.image}
                                                    alt="userimage"
                                                    className="h-7 rounded-full object-cover border p-[2px]"
                                                />
                                                <p className="text-sm flex-1 truncate">
                                                    <span className="font-bold text-gray-700">
                                                        {comment.username}
                                                    </span>{" "}
                                                    {comment.comment}
                                                </p>
                                                <Moment
                                                    fromNow
                                                    className="text-xs text-gray-400 pr-2"
                                                >
                                                    {Date.now().toString()}
                                                </Moment>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {session && (
                                    <form className="flex items-center p-4 gap-2">
                                        <img
                                            src={img}
                                            alt="userimage"
                                            className="h-10 w-10 rounded-full border p-[4px] object-cover"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Add a comment..."
                                            className="border-none flex-1 focus:ring-0 outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className=" text-blue-400 disabled:cursor-not-allowed disabled:text-gray-400"
                                        >
                                            Post
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default TempPage;
