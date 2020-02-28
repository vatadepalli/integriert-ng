import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent } from './components/layout/main/main.component';
import { SolutionsComponent } from './components/pages/solutions/solutions.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { InsightsComponent } from './components/pages/insights/insights.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';



const routes: Routes = [
  {path: "", component: MainComponent
},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "login", component: LoginComponent},
  {path: "partners", component: PartnersComponent},
  {path: "solutions", component: SolutionsComponent},
  {path: "insights", component: InsightsComponent},
  {path: "privacy", component: PrivacyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
