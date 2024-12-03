import {Router} from "express";
import { getSamplesController } from "../controllers/sample.controlller";

const router = Router();

router.get("/",getSamplesController);

export default router;
