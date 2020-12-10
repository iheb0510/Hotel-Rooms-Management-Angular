import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../Shared/service.service';
import {Room} from '../Model/room';
import {Router} from '@angular/router';


@Component({
  selector: 'app-liste-rooms',
  templateUrl: './liste-rooms.component.html',
  styleUrls: ['./liste-rooms.component.css']
})
export class ListeRoomsComponent implements OnInit {
  allrooms: Room[];
  filt: string;

  constructor(private Serv: ServiceService, private r: Router) {
  }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.Serv.GetAllRooms().subscribe((response) => {
      this.allrooms = response;
      console.log(this.allrooms);
    });
  }

  supprimer(room): void {
    this.Serv.DeleteRoom(room).subscribe((response) => {
      console.log('Room deleted!');
      this.r.navigate(['/Room/delete']);
    });
  }
}
