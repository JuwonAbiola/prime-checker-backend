import { Response, Request, NextFunction } from "express";
import {
    serverResponse,
} from '../helpers';

/**
 * Validates the query param
 *
 * @param {Request} req - ExpressJs request object
 * @param {Response} res - ExpressJs response object
 * @param {NextFunction} next - ExpressJs next function
 * @returns {(JSON|function)} HTTP JSON response or ExpressJs next function
 */
const validateNumber = (req: Request, res: Response, next: NextFunction): any => {
    const number = req.params['number'];
    if (!number || !parseInt(number) || parseInt(number) < 2) {
        return serverResponse(res, 400, {
            status: 'error',
            message: 'Please supply a positive number greater than 2 as query param ',
            data: null
        })
    }
    next();
};

export default validateNumber;

