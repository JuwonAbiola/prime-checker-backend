import express from "express";
import PrimeController from "../../controllers/PrimeController";
import middlewares from "../../middleware";

const validateNumber = middlewares;

const router = express.Router();
const primeController = new PrimeController();

router.get("/:number", validateNumber, primeController.getPrimeNumber);

export default router;
