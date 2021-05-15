import express from "express";

import api from "./v1";

const router = express.Router();

router.use("/api/v1", api);
export default router;
