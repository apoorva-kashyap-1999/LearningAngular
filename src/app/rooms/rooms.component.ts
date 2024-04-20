import { Component, OnInit } from '@angular/core';
import { Room , RoomData } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  hotelName='Taj Hotel'
  noOfRooms=20
  hideRooms= false
  e: any;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }
  
  selectRoom(room :RoomData){
    console.log(room);
  }
  
  room : Room = {
      totalRooms: 20,
     availableRooms : 8,
     bookedRooms : 12
  }
  roomsList : RoomData[]=[];
  constructor(){ }

  ngOnInit(): void { 
    this.roomsList = [{
      roomType:"Deluxe",
      amenities:"AC",
      price:2000,
      checkIn:new Date()
     },{
       roomType:"Suite",
       amenities:"Jacuzi",
       price:5000,
       checkIn:new Date()
     }]
   }
}


