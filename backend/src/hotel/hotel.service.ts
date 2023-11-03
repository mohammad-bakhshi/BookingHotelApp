import { prisma } from "../app";
import { CreateHotelRequestDto, UpdateHotelRequestDto } from "./hotel.dto";

export const getAllHotels = async () => {
  const hotels = prisma.hotel.findMany();
  return hotels;
}

export const createHotel = async (hotel: CreateHotelRequestDto) => {
  const createdHotel = await prisma.hotel.create({ data: hotel });
  return createdHotel;
}

export const updateHotel = async (id: string, updateQuery: UpdateHotelRequestDto) => {
  const updatedHotel = await prisma.hotel.update({ data: updateQuery, where: { id } });
  return updatedHotel;
}

export const deleteHotel = async (id: string) => {
  const deletedHotel = await prisma.hotel.delete({ where: { id } });
  return deletedHotel;
}