import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../Shared/service.service';
import {Room} from '../Model/room';

@Component({
  selector: 'app-modifier-room',
  templateUrl: './modifier-room.component.html',
  styleUrls: ['./modifier-room.component.css']
})
export class ModifierRoomComponent implements OnInit {
  id: number;
  Room: Room;
  R2: Room;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ActivatedRoute: ActivatedRoute, private Serv: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.Room = new Room();
    this.R2 = new Room();
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.Serv.getRoom(this.id).subscribe(data => {
      console.log(data);
      this.Room = data;
    }, error => console.log(error));
  }

  sum(e): void {
    this.R2 = e;
    this.R2.id = this.Room.id;
    this.R2.Tourist = this.Room.Tourist;
    this.Serv.UpdateRoom(this.R2).subscribe((response) => {
      console.log('Room updated!');
      this.router.navigate(['/Room/list']);
    });
  }

  can() {
    this.router.navigate(['/Room/list']);
  }
}
