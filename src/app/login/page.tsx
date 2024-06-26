

import XSvg from "@/components/svgs/X";
import { VerifyTokenQuery } from "@/gql/graphql";
import { gqlClient } from "@/graphql/gqlClient";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import toast from "react-hot-toast";
import { MdOutlineMail, MdPassword } from "react-icons/md";

const LoginPage = () => {
    const isLoading = false;
    const isError = false;
    const isPending = false;

    const error = {
        message: "error message",
    };

    const handleGoogleLogin = async (cred: CredentialResponse) => {
        const googleToken = cred.credential;
        if (!googleToken) return toast.error("Authentication falied");

        const { verifyGoogleToken } = await gqlClient.request<VerifyTokenQuery>(
            verifyGoogleTokenQuery,
            {
                token: googleToken,
            }
        );

        if (verifyGoogleToken) {
            window.localStorage.setItem(
                "__twitter__token__",
                verifyGoogleToken
            );
        }
        console.log(verifyGoogleToken);
        toast.success("Account verified.");
    };

    return (
        <div className="max-w-screen-xl mx-auto flex h-screen">
            <div className="flex-1 hidden lg:flex items-center  justify-center">
                <XSvg className="lg:w-2/3 fill-white" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <form
                    className="flex gap-4 flex-col"
                    // onSubmit={handleSubmit}
                >
                    <XSvg className="w-24 lg:hidden fill-white" />
                    <h1 className="text-4xl font-extrabold text-white">
                        {"Let's"} go.
                    </h1>
                    <label className="input input-bordered rounded flex items-center gap-2">
                        <MdOutlineMail />
                        <input
                            type="text"
                            className="grow"
                            placeholder="username"
                            name="username"
                            // onChange={handleInputChange}
                            // value={formData.username}
                        />
                    </label>

                    <label className="input input-bordered rounded flex items-center gap-2">
                        <MdPassword />
                        <input
                            type="password"
                            className="grow"
                            placeholder="Password"
                            name="password"
                            // onChange={handleInputChange}
                            // value={formData.password}
                        />
                    </label>
                    <button className="btn rounded-full btn-primary text-white">
                        {isPending ? "Loading..." : "Login"}
                    </button>
                    {isError && <p className="text-red-500">{error.message}</p>}
                </form>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-white text-lg">
                        {"Don't"} have an account?
                    </p>
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() => {
                            toast("Login failed");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
