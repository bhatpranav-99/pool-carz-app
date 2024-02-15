import { Component } from '@angular/core';
import { RideDetailsComponent } from '../ride-details/ride-details.component';

@Component({
  selector: 'app-book-ride',
  standalone: true,
  imports: [RideDetailsComponent],
  templateUrl: './book-ride.component.html',
  styleUrl: './book-ride.component.scss'
})
export class BookRideComponent {

  selectedRow!:any;
  bookingStatus:boolean =false;

  sendData(val:Object){
    this.selectedRow =val;
  }


  rideData=[
    {
      startPoint:"Vanrose Junction",
      endPoint :"Gotham",
      seatAvailable:3,
      carName:"Jeep"
    },
    {
      startPoint:"PTP",
      endPoint :"Gotham",
      seatAvailable:2,
      carName:"BMW"
    },
    {
      startPoint:"Gotham",
      endPoint :"East-fort",
      seatAvailable:7,
      carName:"Alto"
    },
    {
      startPoint:"Gotham",
      endPoint :"Central Mall",
      seatAvailable:5,
      carName:"Enova"
    }
  ]
}
