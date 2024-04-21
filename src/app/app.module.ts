import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KenthapodiComponent } from './kenthapodi/kenthapodi.component';
import { KenthapodiDetailComponent } from './kenthapodi-detail/kenthapodi-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, KenthapodiComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
