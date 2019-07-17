import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { UserSearchComponent } from './userSearch/userSearch.component';
import { UserDetailsComponent } from './userDetails/userDetails.component';


const routes: Routes = [
  {path: '',component: WelcomePageComponent},
  {path: 'search', component: UserSearchComponent},
  {path: 'search/:user', component: UserSearchComponent},
  {path: 'details/:userLogin', component: UserDetailsComponent},
  {path: '**', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
