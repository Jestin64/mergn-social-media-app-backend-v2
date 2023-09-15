import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import csrf from 'csurf';
import 'dotenv/config';
// Express
import express from 'express';
import useragent from 'express-useragent';
import helmet from 'helmet';
import { createServer } from 'http';
// import logger from 'morgan';
// GraphQL

import schema from './graphql/schema'
// import { graphqlContext } from './graphql/context';

// ORM
// import initOrm from './services/initOrm';


const PORT = process.env.PORT || 3000
const URI = process.env.MONGO_URL || ''


// Set up Express
const app = express();
app.use(cookieParser());

app.use(helmet());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(
    bodyParser.urlencoded({
        limit: '10mb',
        extended: false,
    }),
);

app.use(useragent.express());

const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    context: ({ req }) => ({ req })
})

const setupServer = async () => {
    try {
        mongoose.connect(URI)
            .then(() => {
                console.log("connected to MongoDB")
                return (
                    apolloServer.listen(PORT, () => {
                        console.log("Connected to Server on PORT: ", PORT)
                    })
                )
            })
            .catch(err => {
                throw new Error(`Error connecting to mongodb: ${err}`)
            })
    } catch (err) {
        throw new Error(`Error at server bootup!: ${err}`)
    }

};

// main process starts here
setupServer();

