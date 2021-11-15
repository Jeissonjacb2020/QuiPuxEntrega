import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
];
