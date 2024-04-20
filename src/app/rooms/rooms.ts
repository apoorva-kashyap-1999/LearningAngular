export interface Room {
    totalRooms : number;
    availableRooms : number;
    bookedRooms: number;
}

export interface RoomData {
  roomType: string;
  amenities : string;
  price : number;
  checkIn : Date;
}