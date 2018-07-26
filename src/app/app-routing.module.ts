import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  // { path: 'experience'},
  { path: 'skill', component: SkillComponent},
  { path: 'mywork',component: MyworkComponent},
  { path: 'contact',component:ContactComponent},
  { path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,
                                  AboutComponent,
                                  SkillComponent,
                                  PageNotFoundComponent]