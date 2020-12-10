import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../Model/room';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  AddRoom(Room: Room) {
    return this.http.post('http://localhost:3000/Room', Room);
  }

  UpdateRoom(Room: Room) {
    return this.http.put('http://localhost:3000/Room/' + Room.id, Room);
  }

  DeleteRoom(Room: Room) {
    return this.http.delete('http://localhost:3000/Room/' + Room.id);
  }

  GetAllRooms() {
    return this.http.get<Room[]>('http://localhost:3000/Room');
  }

  getRoom(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/Room/' + id);
    }

}
