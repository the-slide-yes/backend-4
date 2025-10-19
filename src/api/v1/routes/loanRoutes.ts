import express, { Router } from "node_modules/@types/express";
import * as loanController from "../controllers/loanController";

const router: Router = express.Router();

router.get("/", loanController.getAllLoans);

router.post("/", loanController.createLoan);

router.put("/:id/review", loanController.reviewLoan);

router.put("/:id/approve", loanController.approveLoan);

export default router;