export interface CreateHotelRequestDto {
  name: string;
  address: string;
}

export interface UpdateHotelRequestDto {
  name?: string;
  address?: string;
}