import { cookies } from "next/headers";
import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const gqlClient = new GraphQLClient("http://localhost:4000/graphql", {
    headers: () => ({
        Authorization: cookies().has("__twitter__token__")
            ? `Bearer ${cookies().get("__twitter__token__")?.value}`
            : "",
    }),
});
