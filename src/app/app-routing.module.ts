import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppartementsComponent } from './appartements/appartements.component';


const routes: Routes = [
  { path: '', redirectTo: '/appartements', pathMatch: 'full' },
  { path: 'appartements', component: AppartementsComponent }
  { path: 'detail/:id', component: AppartementsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}