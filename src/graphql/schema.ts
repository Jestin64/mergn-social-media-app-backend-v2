import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
import { commonQueryDefs, commonResolvers } from './schemas/commonSchema';

const executableSchema = makeExecutableSchema({
    typeDefs: [
        // userQueryDefs,
        commonQueryDefs,
    ],
    resolvers: [
        // userResolvers,
        commonResolvers,
    ],
})

export default mergeSchemas({
    schemas: [executableSchema],
});