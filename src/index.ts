/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Debug from 'debug';
import routes from './routes';

dotenv.config();

const debug = Debug('dev');

/**
 * App Variables
 */
const app = express();
const PORT = process.env.PORT || 9000;


/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());


/**
 * Routes Activation
 */

app.get('/', (_, res) => {
    res.status(200).send('Welcome to Prime Checker');
});
app.use(routes);

app.listen(PORT, () => debug(`Server started on port ${PORT}`));


export default app;