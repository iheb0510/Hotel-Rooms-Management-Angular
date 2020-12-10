import {Component, OnInit} from '@angular/core';
import {Room} from '../Model/room';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../Shared/service.service';
import {Tourist} from '../Model/tourist';
import {newArray} from '@angular/compiler/src/util';


@Component({
  selector: 'app-list-tourists',
  templateUrl: './list-tourists.component.html',
  styleUrls: ['./list-tourists.component.css']
})
export class ListTouristsComponent implements OnInit {
  Room: Room;
  id: number;
  nbr: number;
  test = false;
  tou = new Tourist();
  b: number;
  t2 = new Tourist();

  constructor(private ActivatedRoute: ActivatedRoute, private serv: ServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.Room = new Room();
    this.id = this.ActivatedRoute.snapshot.params.id;
    this.serv.getRoom(this.id).subscribe(data => {
      console.log(data);
      this.Room = data;
      this.nbr = this.len();
      console.log(this.nbr);

    }, error => console.log(error));

  }

  len(): number {
    if (this.Room.TypeOfRoom === 'Single') {
      return 1;
    }
    if (this.Room.TypeOfRoom === 'Double') {
      return 2;
    }
    if (this.Room.TypeOfRoom === 'Triple') {
      return 3;
    }
  }

  tab(): number {

    return this.Room.Tourist?.length;

  }

  modifier(tourist) {
    this.test = true;
    this.t2 = tourist;
  }

  Supprimer(tourust) {
    const i = this.Room.Tourist.indexOf(tourust);
    this.Room.Tourist.splice(i, 1);
    this.serv.UpdateRoom(this.Room).subscribe((response) => {
      console.log('Tourist deleted!');
    });
  }

  ajout() {
    this.router.navigate(['/Tourist/add', this.Room.id]);
  }

  update(t: Tourist, t1: Tourist) {
    console.log(t);
    const i = this.Room.Tourist.indexOf(t1);
    this.Room.Tourist[i] = t;

    this.serv.UpdateRoom(this.Room).subscribe((response) => {
      console.log('Room updated!');
      this.test = false;
    });
  }

  can(): void {
    this.test = false;
  }

  retour() {
    this.router.navigate(['']);
  }
}


