import { Component, OnInit } from '@angular/core';
import { Room, RoomData } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  constructor() {}

  hotelName = 'Taj Hotel';
  noOfRooms = 20;
  hideRooms = false;
  selectedRoom = {};
  title = 'Rooms-List';
  e: any;

  toggle() {
    this.title = 'Find Rooms';
  }

  showRooms() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomData) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const NewRoom: RoomData = {
      roomType: 'AddNewRoomSuite',
      amenities: 'AC',
      price: 10000,
      checkIn: new Date(),
    };
    this.roomsList = [...this.roomsList, NewRoom]; //   // Create a new array reference for table so table detects changes
    //  this.roomsList.push(NewRoom);
  }

  room: Room = {
    totalRooms: 20,
    availableRooms: 8,
    bookedRooms: 12,
  };
  roomsList: RoomData[] = [];

  ngOnInit(): void {
    this.roomsList = [
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
  }
}
