import express from "express";
import { register, remove, update } from "../controller/user.js";

const router = express.Router()

router.post("/register", register)
router.put("/update", update)
router.delete("/delete", remove)

export default router