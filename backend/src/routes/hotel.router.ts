import { Router } from "express";
import { createHotelController, deleteHotelController, getAllHotelsController, updateHotelController } from "../hotel/hotel.controller";

const router = Router();

router.get("/", getAllHotelsController);
router.post("/", createHotelController);
router.patch("/:id", updateHotelController);
router.delete("/:id", deleteHotelController);


export default router;