import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillComponent } from './skill/skill.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    ExperienceComponent,
    PageNotFoundComponent,
    SkillComponent,
    MyworkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
