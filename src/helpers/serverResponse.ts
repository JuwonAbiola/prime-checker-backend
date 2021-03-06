import { Response } from "express";
/**
 * @name serverResponse
 * @param {Response} res express response object
 * @param {Number} code status code to return
 * @param {Object} data object with response details
 * @returns {JSON} JSON response with status and response information
 */
const serverResponse = (res: Response, code: number, data: Object): any => res.status(code).json({ ...data });

/**
 * @name serverError
 * @param {Object} res express response object
 * @returns {JSON} JSON response with server error details
 */
const serverError = (res: Response): any => res.status(500).json({
  error: 'server error, this will be resolved shortly'
});

export { serverResponse, serverError };
