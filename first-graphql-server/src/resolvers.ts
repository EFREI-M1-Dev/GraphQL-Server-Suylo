import {Resolvers} from "./types";

export const resolvers: Resolvers = {
    Query: {
        getTracks: (parent, args, context, info) => {
            return context.dataSources.trackAPI.getTracks()
        }
    },
    Track: {
        author: ({authorId}, args, context, info) => {
            return context.dataSources.trackAPI.getAuthorBy(authorId)
        }
    },
};