import { Response, Request } from "express";
import {
    serverError, nearestPrime, serverResponse
} from '../helpers';

/**
 * @export
 * @class PrimeController
 */
class PrimeController {
    /**
     * @name get
     * @memberof PrimeController
     * @param {Request} req express request object
     * @param {Response} res express response object
     * @returns {JSON} JSON object with details of req params
     */
    getPrimeNumber(req: Request, res: Response): JSON {
        try {
            const { number } = req.params;
            const nearestPrimeValue = nearestPrime(+number);
            const data = {
                status: 'Success',
                message: `The highest prime number lower than ${number} is ${nearestPrimeValue}`,
                data: {
                    inputValue: number,
                    nearestPrime: nearestPrimeValue
                }
            }
            return serverResponse(res, 200, data);
        } catch (error) {
            return serverError(res);
        }
    }
}
export default PrimeController;