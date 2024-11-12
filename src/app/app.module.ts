import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { HotTopicsComponent } from './HotTopics/hot-topics.component';
import { LatestNewsComponent } from './LatestNews/latest-news.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsCardComponent } from './NewsCard/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotTopicsComponent,
    LatestNewsComponent,
    NewsCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
