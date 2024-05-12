import { gql } from "graphql-request";

export const verifyGoogleTokenQuery = gql`
    #graphql
    query VerifyToken($token: String!) {
        verifyGoogleToken(token: $token)
    }
`;
