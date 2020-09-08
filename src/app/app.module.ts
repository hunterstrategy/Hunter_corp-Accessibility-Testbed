import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule} from  '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import {MatListModule} from '@angular/material/list';
import { MatchComponent } from './match/match.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HotspotComponent } from './hotspot/hotspot.component';
import { MatMenuModule } from '@angular/material';
import { TableComponent } from './table/table.component';

import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { TableSelectionExample } from './example/example.component';
import { HotspotSingleComponent } from './hotspot-single/hotspot-single.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    MatchComponent,
    HotspotComponent,
    TableSelectionExample,
    HotspotSingleComponent
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
    DragDropModule,
    MatMenuModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
