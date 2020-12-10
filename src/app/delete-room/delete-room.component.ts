import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {

  constructor(private r: Router) {
    this.r.navigate(['']);
  }

  ngOnInit(): void {
  }

}
