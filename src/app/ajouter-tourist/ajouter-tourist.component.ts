import {Component, OnInit} from '@angular/core';
import {Room} from '../Model/room';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../Shared/service.service';
import {Tourist} from '../Model/tourist';

@Component({
  selector: 'app-ajouter-tourist',
  templateUrl: './ajouter-tourist.component.html',
  styleUrls: ['./ajouter-tourist.component.css']
})
export class AjouterTouristComponent implements OnInit {
  Room: Room;
  id: number;
  tourist: Tourist;

  constructor(private ActivatedRoute: ActivatedRoute, private serv: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.tourist = new Tourist();
    this.Room = new Room();
    this.id = this.ActivatedRoute.snapshot.params.id;
    this.serv.getRoom(this.id).subscribe(data => {
      console.log(data);
      this.Room = data;

    }, error => console.log(error));

  }


  sum(f) {
    this.Room.Tourist.push(f);
    this.serv.UpdateRoom(this.Room).subscribe((response) => {
      console.log('Tourist added!');
      this.router.navigate(['/Tourist/list', this.Room.id]);
    });
  }

  can() {
    this.router.navigate(['/Tourist/list', this.Room.id]);
  }
}
