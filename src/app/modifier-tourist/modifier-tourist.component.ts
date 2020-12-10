import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tourist} from '../Model/tourist';
import {Room} from '../Model/room';

@Component({
  selector: 'app-modifier-tourist',
  templateUrl: './modifier-tourist.component.html',
  styleUrls: ['./modifier-tourist.component.css']
})
export class ModifierTouristComponent implements OnInit {
  @Input() showtourist: Tourist;
  @Output() modifier = new EventEmitter<Tourist>();
  @Output() cancel = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(f) {
    this.modifier.emit(f);
  }

  can() {
    this.cancel.emit();
  }
}
