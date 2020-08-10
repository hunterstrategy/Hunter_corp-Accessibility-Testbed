import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { TableSelectionExample } from './example/example.component';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule} from  '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import {MatListModule, MatList} from '@angular/material/list';
import { MatchComponent } from './match/match.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HotspotComponent } from './hotspot/hotspot.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSelectionExample,
    HeaderComponent,
    MatchComponent,
    HotspotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
