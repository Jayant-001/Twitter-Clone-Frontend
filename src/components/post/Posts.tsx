import React from "react";
import PostSkeleton from "../skeletons/PostSkeleton";
import Post from "./Post";

const Posts = () => {
    const isLoading = false;
    const posts = [1, 2, 3, 4, 5];

    return (
        <>
            {isLoading && (
                <div className="flex flex-col justify-center">
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </div>
            )}
            {posts?.length === 0 && (
                <p className="text-center my-4">
                    No posts in this tab. Switch 👻
                </p>
            )}
            {posts && (
                <div>
                    {posts.map((post, id) => (
                        <Post key={id} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Posts;
