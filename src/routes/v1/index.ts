import express from "express";
import prime from "./prime";

const router = express.Router();

router.use("/prime", prime);

export default router;
