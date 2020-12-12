import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../Shared/service.service';
import {Router} from '@angular/router';
import {Tourist} from '../Model/tourist';
import {Room} from '../Model/room';

@Component({
  selector: 'app-ajouter-room',
  templateUrl: './ajouter-room.component.html',
  styleUrls: ['./ajouter-room.component.css']
})
export class AjouterRoomComponent implements OnInit {
  RoomForm: FormGroup;
  Room: Room;

  constructor(private  serv: ServiceService, private  r: Router) {
  }

  ngOnInit(): void {
    this.RoomForm = new FormGroup({
        RoomNumber: new FormControl('', [Validators.required, Validators.maxLength(4)]),
        TypeOfRoom: new FormControl('', [Validators.required]),
        SquareFootage: new FormControl('', [Validators.required]),
        PhoneAvailable: new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}$')])

      }
    )
    ;
  }

  // tslint:disable-next-line:typedef
  get RoomNumber() {
    return this.RoomForm.get('RoomNumber');
  }

  // tslint:disable-next-line:typedef
  get TypeOfRoom() {
    return this.RoomForm.get('TypeOfRoom');
  }

  // tslint:disable-next-line:typedef
  get SquareFootage() {
    return this.RoomForm.get('SquareFootage');
  }

  // tslint:disable-next-line:typedef
  get PhoneAvailable() {
    return this.RoomForm.get('PhoneAvailable');
  }

  Ajouter(): void {
    this.Room = this.RoomForm.value;
    this.Room.Tourist = [];
    this.serv.AddRoom(this.RoomForm.value).subscribe((response) => {
      console.log('Room created!');
      this.r.navigate(['/Room/list']);
    });


  }

  can() {
    this.r.navigate(['/Room/list']);
  }
}
