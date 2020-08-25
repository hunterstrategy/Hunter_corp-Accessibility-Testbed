import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HotspotComponent } from './hotspot/hotspot.component';
import { MatchComponent } from './match/match.component';
import { TableComponent } from './table/table.component';
import { TableSelectionExample } from './example/example.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' },
    {
        path: 'match', component: MatchComponent
    },
    {
        path: 'hotspot', component: HotspotComponent
    },
    {
        path: 'table', component: TableComponent
    },
    {
        path: 'example', component: TableSelectionExample
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);