import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from './components/home-app/home-app.component';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { AboutAppComponent } from './components/about-app/about-app.component';

const routes: Routes = [
  { path:'' ,pathMatch:'full',redirectTo:'home-app'},
  { path:'home-app',component: HomeAppComponent },
  { path:'about-app', component:AboutAppComponent  },
  { path:'contact-app',component:ContactAppComponent },
  { path:'**',pathMatch:'full', redirectTo:'home-app' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
