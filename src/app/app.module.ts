import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopMenuComponent } from './components/shared/top-menu/top-menu.component';
import { FallingWordsComponent } from './components/shared/falling-words/falling-words.component';

import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './components/home/intro/intro.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { ExperiencesComponent } from './components/home/experiences/experiences.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FerrisWheelComponent } from './components/home/ferris-wheel/ferris-wheel.component';
import { ProjectComponent } from './pages/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    IntroComponent,
    FallingWordsComponent,
    AboutMeComponent,
    ExperiencesComponent,
    ProjectsComponent,
    ContactComponent,
    FerrisWheelComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
