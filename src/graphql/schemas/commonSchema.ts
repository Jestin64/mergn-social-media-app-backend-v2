import { gql } from 'apollo-server-express';
import { dummyResolver } from '../resolvers/commonResolver';


export const commonResolvers = {
    Query: {
        dummy: dummyResolver,
    },
    // Mutation :{
    //   signUp: signUpResolver,
    // }
}


export const commonQueryDefs = gql`
schema {
    query: Query
  }

  type Query {
    dummy: String,
  }
`;