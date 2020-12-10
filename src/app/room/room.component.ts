import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Room} from '../Model/room';
import {ServiceService} from '../Shared/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() showroom: Room;
  @Output() delete = new EventEmitter<Room>();

  constructor(private Serv: ServiceService, private  router: Router) {
  }

  ngOnInit(): void {
  }

  Supprimer(): void {
    this.delete.emit(this.showroom);
  }

  modifier(id: number): void {
    this.router.navigate(['/Room/edit', id]);
  }

  GetTourists(id: number): void {
    this.router.navigate(['/Tourist/list', id]);
  }
}
