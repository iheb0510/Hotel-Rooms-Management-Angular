import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListeRoomsComponent} from './liste-rooms/liste-rooms.component';
import {RoomComponent} from './room/room.component';
import {AjouterRoomComponent} from './ajouter-room/ajouter-room.component';
import {ModifierRoomComponent} from './modifier-room/modifier-room.component';
import {AppRoutingModule} from './app.routing.module';
import {AjouterTouristComponent} from './ajouter-tourist/ajouter-tourist.component';
import {ModifierTouristComponent} from './modifier-tourist/modifier-tourist.component';
import {DeleteRoomComponent} from './delete-room/delete-room.component';
import {ListTouristsComponent} from './list-tourists/list-tourists.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    ListeRoomsComponent,
    RoomComponent,
    AjouterRoomComponent,
    ModifierRoomComponent,
    AjouterTouristComponent,
    ModifierTouristComponent,
    ListTouristsComponent,
    DeleteRoomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
