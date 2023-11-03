import { Request, Response } from 'express';
import { getAllHotels, createHotel, updateHotel, deleteHotel } from './hotel.service';
import { CreateHotelRequestDto } from './hotel.dto';


export const getAllHotelsController = async (req: Request, res: Response) => {
  const hotels = await getAllHotels();
  res.json(hotels)
}


export const createHotelController = async (req: Request, res: Response) => {
  const data = req.body;
  const hotel = await createHotel(data);
  res.json(hotel);
}

export const updateHotelController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const hotel = await updateHotel(id, data);
  res.json(hotel);
}

export const deleteHotelController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const hotel = await deleteHotel(id);
  res.json(hotel);
}