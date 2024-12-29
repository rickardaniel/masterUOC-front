import { Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DetailNewComponent } from './components/detail-new/detail-new.component';

export const routes: Routes = [
    {
        path:'', component: MainViewComponent
    },
    {
        path:'news', component: DetailNewComponent
    },
];
