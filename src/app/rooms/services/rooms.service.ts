import { Injectable } from '@angular/core';
import { RoomData } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList: RoomData[] = [
    {
      roomType: 'Deluxe',
      amenities: 'AC',
      price: 2000,
      checkIn: new Date(),
    },
    {
      roomType: 'Suite',
      amenities: 'Jacuzi',
      price: 5000,
      checkIn: new Date(),
    },
  ];

  constructor() { }

  getRooms(){
    return this.roomsList;
  }
}
