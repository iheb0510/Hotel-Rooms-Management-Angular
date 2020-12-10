import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AjouterRoomComponent} from './ajouter-room/ajouter-room.component';
import {ListeRoomsComponent} from './liste-rooms/liste-rooms.component';
import {ModifierRoomComponent} from './modifier-room/modifier-room.component';
import {AjouterTouristComponent} from './ajouter-tourist/ajouter-tourist.component';
import {ModifierTouristComponent} from './modifier-tourist/modifier-tourist.component';
import {ListTouristsComponent} from './list-tourists/list-tourists.component';
import {DeleteRoomComponent} from './delete-room/delete-room.component';

const routes: Routes = [
  {
    path: 'Room', children: [
      {path: 'add', component: AjouterRoomComponent},
      {path: 'list', component: ListeRoomsComponent},
      {path: 'edit/:id', component: ModifierRoomComponent},
      {path: 'delete', component: DeleteRoomComponent}
    ]
  },
  {
    path: 'Tourist', children: [
      {path: 'add/:id', component: AjouterTouristComponent},
      {path: 'list/:id', component: ListTouristsComponent},
      {path: 'edit/:id', component: ModifierTouristComponent},
    ]
  },

  {
    path: '', redirectTo: 'Room/list', pathMatch: 'full'

  },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
