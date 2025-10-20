import app from "../src/app";
import { HTTP_STATUS } from "../src/constants/httpConstants";
import request from "supertest";

describe("Loan Routes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("GET /api/v1/loans", () => {
        it("should respond with OK status", async () => {
            // Act
            const response = await request(app).get("/api/v1/loans");

            // Assert
            expect(response.status).toBe(HTTP_STATUS.OK);
            expect(response.body).toMatchObject({
                data: "Definitely succeeded I promise.",
                status: "success",
            });
        });
    });

    describe("POST /api/v1/loans", () => {
        it("should respond with CREATED status", async () => {
            // Act
            const response = await request(app).post("/api/v1/loans");

            // Assert
            expect(response.status).toBe(HTTP_STATUS.CREATED);
            expect(response.body).toMatchObject({
                data: "Definitely succeeded I promise.",
                status: "success",
            });
        });
    });

    describe("PUT /api/v1/loans/:id/review", () => {
        it("should respond with OK status", async () => {
            // Act
            const response = await request(app).put("/api/v1/loans/1/review");

            // Assert
            expect(response.status).toBe(HTTP_STATUS.OK);
            expect(response.body).toMatchObject({
                data: "Definitely succeeded I promise.",
                status: "success",
            });
        });
    });

    describe("PUT /api/v1/loans/:id/approve", () => {
        it("should respond with OK status", async () => {
            // Act
            const response = await request(app).put("/api/v1/loans/1/approve");

            // Assert
            expect(response.status).toBe(HTTP_STATUS.OK);
            expect(response.body).toMatchObject({
                data: "Definitely succeeded I promise.",
                status: "success",
            });
        });
    });
});