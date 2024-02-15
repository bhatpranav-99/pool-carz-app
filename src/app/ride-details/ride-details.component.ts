import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  standalone: true,
  imports: [],
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.scss'
})
export class RideDetailsComponent {

  @Input() selectedRide!:any;
  @Output() rideBooked:EventEmitter<boolean> = new EventEmitter<boolean>();
  status:boolean =false;
  bookingId:string ="T100";
  userBookingId!:string ;

  registeredUser={
     id:'T102',
     name:"Kent Clark",
     age:25,
     country:"Aurstralia"
  }



  bookingDone(){
    this.status = !this.status;

    if(this.status){
      let newId = this.bookingIdCreator();
      this.userBookingId =newId;
      this.selectedRide.seatAvailable--;

      this.rideBooked.emit(true);
    }else{

      this.selectedRide.seatAvailable++;
      this.rideBooked.emit(false);
    }


  }

  bookingIdCreator(){
    let bId =this.bookingId.substring(1);
    let num = parseInt(bId);
    num++;
    this.bookingId = this.bookingId.substring(0,1)+num;
    return this.bookingId;
  }


}
