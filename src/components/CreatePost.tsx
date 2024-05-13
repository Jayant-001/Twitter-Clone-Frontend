"use client";

import { CiImageOn } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { BsEmojiSmileFill } from "react-icons/bs";
import React, { useState } from "react";
import Image from "next/image";

const CreatePost = () => {
    const img = "https://tinypng.com/static/images/george-account-page.webp";
    const [text, setText] = useState("");

    return (
        <div className="flex p-4 items-start gap-4 border-b border-gray-700">
            <div className="avatar">
                <div>
                    <Image
                        src={"/avatar-placeholder.png"}
                        className="rounded-full"
                        alt="profile image"
                        width={36}
                        height={36}
                    />
                </div>
            </div>
            <form className="flex flex-col gap-2 w-full" onSubmit={() => {}}>
                <textarea
                    className="textarea w-full bg-slate-300 p-2 text-lg resize-none border-none focus:outline-none  border-gray-800 rounded-xl"
                    placeholder="What is happening?!"
                    value={text}
                    rows={4}
                    onChange={(e) => setText(e.target.value)}
                />
                {/* {img && (
                    <div className="relative w-72 mx-auto">
                        <IoCloseSharp className="absolute top-0 right-0 text-white bg-gray-800 rounded-full w-5 h-5 cursor-pointer" />
                        <img
                            src={img}
                            className="w-full mx-auto h-72 object-contain rounded"
                        />
                    </div>
                )} */}

                <div className="flex justify-between border-t py-2 border-t-gray-700">
                    <div className="flex gap-1 items-center">
                        <CiImageOn className="fill-primary w-6 h-6 cursor-pointer" />
                        <BsEmojiSmileFill className="fill-primary w-5 h-5 cursor-pointer" />
                    </div>
                    <input type="file" accept="image/*" hidden />
                    <button className="btn btn-primary rounded-full border bg-slate-300 hover:bg-slate-500 btn-sm  px-4">
                        {false ? "Posting..." : "Post"}
                    </button>
                </div>
                {true && <div className="text-red-500">error.message</div>}
            </form>
        </div>
    );
};

export default CreatePost;
