import React from "react";
import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

const RightSideBar = () => {
    const isLoading = false;
    const isPending = false;
    const suggestedUsers = [
        {
            _id: 93,
            username: "jayant2k1",
            fullName: "jayant kuamr gupta",
            profileImg:
                "https://tinypng.com/static/images/george-account-page.webp",
        },
        {
            _id: 93,
            username: "jayant2k1",
            fullName: "jayant kuamr gupta",
            profileImg:
                "https://tinypng.com/static/images/george-account-page.webp",
        },
        {
            _id: 93,
            username: "jayant2k1",
            fullName: "jayant kuamr gupta",
            profileImg:
                "https://tinypng.com/static/images/george-account-page.webp",
        },
    ];
    

    return (
        <div className="hidden lg:block my-4 mx-2">
            <div className="p-4 rounded-md sticky top-2">
                <p className="font-bold">Who to follow</p>
                <div className="flex flex-col gap-4">
                    {/* item */}
                    {isLoading && (
                        <>
                            <RightPanelSkeleton />
                            <RightPanelSkeleton />
                            <RightPanelSkeleton />
                            <RightPanelSkeleton />
                        </>
                    )}
                    {!isLoading &&
                        suggestedUsers?.map((user) => (
                            <Link
                                href={`/profile/${user.username}`}
                                className="flex items-center justify-between gap-4"
                                key={user._id}
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img
                                                src={
                                                    user.profileImg ||
                                                    "/avatar-placeholder.png"
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold tracking-tight truncate w-28">
                                            {user.fullName}
                                        </span>
                                        <span className="text-sm text-slate-500">
                                            @{user.username}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn text-black hover:bg-slate-300 px-2 hover:opacity-90 rounded-full btn-sm">
                                        {isPending ? (
                                            <LoadingSpinner size="sm" />
                                        ) : (
                                            "Follow"
                                        )}
                                    </button>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
