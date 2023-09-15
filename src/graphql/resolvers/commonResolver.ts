import { GraphqlContext } from "../context"


export const dummyResolver = async(_:any, args: any, context:GraphqlContext) => {
    
    return 'Good to go!'
}