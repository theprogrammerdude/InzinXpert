import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactFormComponent } from "./shared/contact-form/contact-form.component";
import { NewsletterComponent } from "./shared/newsletter/newsletter.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ServicesComponent } from './components/services/services.component';
import { PartnerComponent } from './components/partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactFormComponent,
    NewsletterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PartnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
