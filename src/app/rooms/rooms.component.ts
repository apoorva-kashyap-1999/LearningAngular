import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomData } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  constructor() {}

  ngOnInit(): void {
    console.log('HeaderComponent', this.headerComponent);
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

  ngAfterViewInit(): void {
    // console.log('after view init', this.headerComponent);
    // console.log('after view init', this.headerComponents.last);
    this.headerComponent.title = 'Rooms View';
    // this.headerComponents.last.title = 'Last View';
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngDoCheck(): void {
    console.log('On check called');
  }

  // By adding ! after the property type (HeaderComponent), you're telling TypeScript that this property will be initialized by Angular through @ViewChild and will not be null or undefined. This should resolve the TypeScript error.
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerComponents!: QueryList<HeaderComponent>;

  hotelName = 'Taj Hotel';
  noOfRooms = 20;
  hideRooms = false;
  hideRoomList = true;
  selectedRoom = {};
  title = 'Rooms-List';
  e: any;

  toggle() {
    this.title = 'Find Rooms';
  }

  toggletable() {
    this.hideRoomList = !this.hideRoomList;
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
}
