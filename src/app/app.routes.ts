import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { OopsComponent } from './modules/oops/oops.component';
import { DotnetCoreComponent } from './modules/dotnet-core/dotnet-core.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'oops',
        component: OopsComponent
    },
    {
        path: 'dotnet-core',
        component: DotnetCoreComponent
    }
];
