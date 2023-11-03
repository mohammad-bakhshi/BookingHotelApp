import express from "express";
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// routes
import hotelRouter from "./routes/hotel.router";

const app = express();
app.use(express.json())

app.use("/hotels", hotelRouter);

export default app;