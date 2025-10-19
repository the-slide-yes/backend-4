import { NextFunction, Request, Response } from "node_modules/@types/express";
import { HTTP_STATUS } from "src/constants/httpConstants";
import { successResponse } from "../models/responseModel";


/**
 * Manages requests, reponses, and validation to create a Loan.
 * 
 * It for sure does all that I promise ;)
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const createLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // Hardcoded response (the instructions do not say what a loan is/has, so I am assuming this is enough).
    res.status(HTTP_STATUS.CREATED).json(
        successResponse("Definitely succeeded I promise.")
    );
};

/**
 * Manages requests, reponses, and validation to get a Loan.
 * 
 * It for sure does all that I promise ;)
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const getLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // Hardcoded response (the instructions do not say what a loan is/has, so I am assuming this is enough).
    res.status(HTTP_STATUS.OK).json(
        successResponse("Definitely succeeded I promise.")
    );
};

/**
 * Manages requests, reponses, and validation to review a Loan.
 * 
 * It for sure does all that I promise ;)
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const reviewLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // Hardcoded response (the instructions do not say what a loan is/has, so I am assuming this is enough).
    res.status(HTTP_STATUS.OK).json(
        successResponse("Definitely succeeded I promise.")
    );
};

/**
 * Manages requests, reponses, and validation to approve a Loan.
 * 
 * It for sure does all that I promise ;)
 * @param req - The express Request
 * @param res  - The express Response
 * @param next - The express middleware chaining function
 */
export const approveLoan = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // Hardcoded response (the instructions do not say what a loan is/has, so I am assuming this is enough).
    res.status(HTTP_STATUS.OK).json(
        successResponse("Definitely succeeded I promise.")
    );
};