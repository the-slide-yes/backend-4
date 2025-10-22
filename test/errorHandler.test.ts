import { Request, Response } from "express";
import errorHandler from "../src/api/v1/middleware/errorHandler";
import {
    AuthenticationError,
    AuthorizationError,
} from "../src/api/v1/errors/errors";
import { HTTP_STATUS } from "../src/constants/httpConstants";

describe("errorHandler middleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: jest.Mock;
    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;

    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });

        mockRequest = {};
        mockResponse = {
            status: statusMock,
        };
        nextFunction = jest.fn();
    });

    it("should handle AuthenticationError with correct status and message", () => {
        // Arrange
        const error: AuthenticationError = new AuthenticationError("Invalid token", "TOKEN_INVALID");

        // Act
        errorHandler(
            error,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );

        // Assert
        expect(statusMock).toHaveBeenCalledWith(HTTP_STATUS.UNAUTHORIZED);
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",
            error: {
                message: "Invalid token",
                code: "TOKEN_INVALID",
            },
            timestamp: expect.any(String),
        });
    });

    it("should handle AuthorizationError with correct status and message", () => {
        // Arrange
        const error: AuthorizationError = new AuthorizationError(
            "Insufficient permissions",
            "INSUFFICIENT_ROLE"
        );

        // Act
        errorHandler(
            error,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );

        // Assert
        expect(statusMock).toHaveBeenCalledWith(HTTP_STATUS.FORBIDDEN);
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",
            error: {
                message: "Insufficient permissions",
                code: "INSUFFICIENT_ROLE",
            },
            timestamp: expect.any(String),
        });
    });

    it("should handle generic Error with 500 status", () => {
        // Arrange
        const error: Error = new Error("Unexpected error");

        // Act
        errorHandler(
            error,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );

        // Assert
        expect(statusMock).toHaveBeenCalledWith(
            HTTP_STATUS.INTERNAL_SERVER_ERROR
        );
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",
            error: {
                message: "An unexpected error occurred",
                code: "UNKNOWN_ERROR",
            },
            timestamp: expect.any(String),
        });
    });

    it("should handle null error gracefully", () => {
        // Act
        errorHandler(
            null,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );

        // Assert
        expect(statusMock).toHaveBeenCalledWith(
            HTTP_STATUS.INTERNAL_SERVER_ERROR
        );
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",
            error: {
                message: "An unexpected error occurred",
                code: "UNKNOWN_ERROR",
            },
            timestamp: expect.any(String),
        });
    });
});