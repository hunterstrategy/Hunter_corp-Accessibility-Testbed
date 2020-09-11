import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HotspotComponent } from './hotspot/hotspot.component';
import { MatchComponent } from './match/match.component';
import { TableComponent } from './table/table.component';
import { TableSelectionExample } from './example/example.component';
import { HotspotSingleComponent } from './hotspot-single/hotspot-single.component';
import { HotspotMaxComponent } from './hotspot-max/hotspot-max.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' },
    {
        path: 'match', component: MatchComponent
    },
    {
        path: 'hotspot', component: HotspotComponent
    },
    {
        path: 'hotspot-single', component: HotspotSingleComponent
    },
    {
        path: 'hotspot-max', component: HotspotMaxComponent
    },
    {
        path: 'table', component: TableComponent
    },
    {
        path: 'example', component: TableSelectionExample
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);